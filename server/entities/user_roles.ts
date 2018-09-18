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
import { User } from './users';
import { BaseEntity } from './base_entity';

@Entity('user_roles')
export class UserRole extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'user_role_id',
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    length: 100,
    name: 'role_key',
  })
  roleKey: string;

  @ManyToOne((type) => User)
  user: User;
}
