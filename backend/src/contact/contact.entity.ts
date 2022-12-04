import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('contact')
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createTime: Date;

    @Column({ type: 'varchar', length: 30 })
    fullName: string;

    @Column({ type: 'varchar', length: 15 })
    phone: string;

    @Column({ type: 'varchar', length: 40 })
    email: string;

    @Column()
    content: string;

    @Column()
    satisfaction: number;

    @Column()
    happines: number;
    
    @Column({ type: 'boolean', default: false })
    isCompleted?: boolean;
}