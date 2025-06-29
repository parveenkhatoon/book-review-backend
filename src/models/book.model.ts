import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';

export class Book extends Model {
  public id!: number;
  public title!: string;
  public author!: string;
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Book',
    tableName: 'books',
    timestamps: false,
  }
);