import {
  Index,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  JoinTable,
  RelationId,
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { UserRole } from './user_roles';
import { BaseEntity } from './base_entity';

@Entity('users')
@Index('idx_users', ['email', 'deletedAt'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'user_id',
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    length: 255,
  })
  firstName: string;

  @Column('varchar', {
    nullable: false,
    length: 255,
  })
  lastName: string;

  @Column('varchar', {
    nullable: false,
    unique: true,
    length: 255,
  })
  @IsNotEmpty()
  email: string;

  @Column('varchar', {
    nullable: false,
    length: 255,
  })
  password: string;

  @Column('varchar', {
    nullable: true,
    length: 20,
  })
  tel: string;

  @Column('varchar', {
    nullable: true,
    length: 20,
  })
  zip: string;

  @Column('varchar', {
    nullable: true,
    length: 255,
  })
  address: string;

  @OneToMany((type) => UserRole, (userRole) => userRole.user)
  roles: UserRole[];
}
