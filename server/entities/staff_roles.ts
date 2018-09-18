import {
  Index,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { Staff } from './staffs';

@Entity('staff_roles')
export class StaffRole extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'staff_role_id',
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    length: 100,
    name: 'role_key',
  })
  roleKey: string;

  @ManyToOne((type) => Staff)
  staff: Staff;
}
