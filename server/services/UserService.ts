import { Service } from 'typedi';
import { Repository, FindManyOptions, InsertResult } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { User } from '../entities/users';

@Service()
export class UserService {
  @InjectRepository(User) private userRepository: Repository<User>;

  /**
   * 条件に一致するユーザーを取得します。
   * @param options
   */
  async findAndCount(
    options: { offset?: number; limit?: number; where?: {} } = {}
  ): Promise<[User[], number]> {
    const findOptions: FindManyOptions = {
      where: options.where,
      skip: options.offset || 0,
      take: options.limit || Number.MAX_SAFE_INTEGER,
    };
    return this.userRepository.findAndCount(findOptions);
  }

  /**
   * ユーザーを1件取得します。
   * @param id
   */
  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne({ id: id });
  }

  /**
   * ユーザーを登録します。
   * @param user
   */
  async insert(user: User): Promise<User> {
    let count = await this.userRepository.count({ email: user.email });
    if (count > 0) {
      throw new IllegalStateException('データが重複しています。');
    }
    return this.userRepository.save(user);
  }

  /**
   * ユーザーを更新します。
   * @param user
   */
  async update(user: User): Promise<User> {
    const old = await this.userRepository.findOne(user.id);
    if (!old) {
      throw new NoDataFoundException('データが見つかりません。id=' + user.id);
    }
    return this.userRepository.save(Object.assign(old, user));
  }

  /**
   * ユーザーを論理削除します。
   * @param id
   */
  async delete(id: number): Promise<User> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NoDataFoundException('データが見つかりません。id=' + id);
    }
    user.deletedAt = new Date();

    return this.userRepository.remove(user);
  }
}
