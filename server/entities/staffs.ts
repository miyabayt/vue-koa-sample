import {
  Index,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { BaseEntity } from './base_entity';
import { StaffRole } from './staff_roles';

@Entity('staffs')
@Index('idx_staffs', ['email', 'deletedAt'])
export class Staff extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'staff_id',
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    length: 40,
    name: 'first_name',
  })
  firstName: string;

  @Column('varchar', {
    nullable: false,
    length: 40,
    name: 'last_name',
  })
  lastName: string;

  @Column('varchar', {
    nullable: true,
    length: 100,
    name: 'email',
  })
  email: string | null;

  @Column('varchar', {
    nullable: true,
    length: 100,
    name: 'password',
  })
  password: string | null;

  @Column('varchar', {
    nullable: true,
    length: 20,
    name: 'tel',
  })
  tel: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'password_reset_token',
  })
  passwordResetToken: string | null;

  @Column('datetime', {
    nullable: true,
    name: 'token_expires_at',
  })
  tokenExpiresAt: Date | null;

  @OneToMany((type) => StaffRole, (staffRole) => staffRole.staff)
  roles: StaffRole[];
}
