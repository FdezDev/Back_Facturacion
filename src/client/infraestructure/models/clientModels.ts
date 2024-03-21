import { Model, DataType, Table, Column } from 'sequelize-typescript';

@Table({
    tableName: 'clientes',
    timestamps: true 
})
class ClientModel extends Model {
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    })
    public id!: number;
    
    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public name!: string;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public last_name!: string;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public phone!: number;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public address!: string;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public service!: string;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public item!: number;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public price!: number;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public date_int!: string;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public date_end!: string;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public total_payment!: number;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public status_payment!: string;
    

}

export default ClientModel;
