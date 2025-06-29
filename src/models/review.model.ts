import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';
import { Book } from './book.model';

export class Review extends Model {
  public id!: number;
  public comment!: string;
  public bookId!: number;
}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: { model: 'books', key: 'id' },
    },
  },
  {
    sequelize,
    modelName: 'Review',
    tableName: 'reviews',
    timestamps: false,
    indexes: [{ fields: ['bookId'] }],
  }
);

// Book.hasMany(Review, { foreignKey: 'bookId' });
// Review.belongsTo(Book, { foreignKey: 'bookId' });