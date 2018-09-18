import { Service } from 'typedi';
import { Repository, FindManyOptions, InsertResult } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Staff } from '../entities/staffs';

@Service()
export class StaffService {
  @InjectRepository(Staff) private staffRepository: Repository<Staff>;

  /**
   * 条件に一致する担当者を取得します。
   * @param options
   */
  async findAndCount(
    options: { offset?: number; limit?: number; where?: {} } = {}
  ): Promise<[Staff[], number]> {
    const findOptions: FindManyOptions = {
      where: options.where,
      skip: options.offset || 0,
      take: options.limit || Number.MAX_SAFE_INTEGER,
    };
    return this.staffRepository.findAndCount(findOptions);
  }

  /**
   * 担当者を1件取得します。
   * @param id
   */
  async findOne(id: number): Promise<Staff> {
    return await this.staffRepository.findOne({ id: id });
  }

  /**
   * 担当者を登録します。
   * @param staff
   */
  async insert(staff: Staff): Promise<Staff> {
    let count = await this.staffRepository.count({ email: staff.email });
    if (count > 0) {
      throw new IllegalStateException('データが重複しています。');
    }
    return this.staffRepository.save(staff);
  }

  /**
   * 担当者を更新します。
   * @param staff
   */
  async update(staff: Staff): Promise<Staff> {
    const old = await this.staffRepository.findOne(staff.id);
    if (!old) {
      throw new NoDataFoundException('データが見つかりません。id=' + staff.id);
    }
    return this.staffRepository.save(Object.assign(old, staff));
  }

  /**
   * 担当者を論理削除します。
   * @param id
   */
  async delete(id: number): Promise<Staff> {
    const staff = await this.staffRepository.findOne(id);
    if (!staff) {
      throw new NoDataFoundException('データが見つかりません。id=' + id);
    }
    staff.deletedAt = new Date();

    return this.staffRepository.remove(staff);
  }
}
