import { Sequelize,QueryTypes } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASS!,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'mysql',
    logging: false,
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected');
  } catch (err) {
    console.error('❌ DB connection error:', err);
  }
};

//db query for jest test
export const getReviewsByBookId = async (bookId: string) => {
  return await sequelize.query(
    'SELECT * FROM reviews WHERE bookid = ?',
    {
      replacements: [bookId],
      type: QueryTypes.SELECT,
    }
  );
};