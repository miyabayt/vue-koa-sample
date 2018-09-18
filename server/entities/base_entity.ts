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

export abstract class BaseEntity {
  @Column('varchar', {
    nullable: false,
    length: 50,
    name: 'created_by',
  })
  createdBy: string;

  @Column('datetime', {
    nullable: false,
    name: 'created_at',
  })
  createdAt: Date;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'updated_by',
  })
  updatedBy: string | null;

  @Column('datetime', {
    nullable: true,
    name: 'updated_at',
  })
  updatedAt: Date | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'deleted_by',
  })
  deletedBy: string | null;

  @Column('datetime', {
    nullable: true,
    name: 'deleted_at',
  })
  deletedAt: Date | null;

  @Column('int', {
    nullable: false,
    default: '1',
    name: 'version',
  })
  version: number;
}
