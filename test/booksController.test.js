const request = require('supertest');
const app = require('../app');  // Adjust path if needed

describe('Books API', () => {
    it('should create a new book', async () => {
        const res = await request(app)
            .post('/books')  // Assuming this is your route for creating a book
            .send({ title: 'Book Title', author: 'Author Name', genre: 'Fiction', isFiction: true });

        expect(res.statusCode).toBe(201);  // Expect the status code to be 201 (created)
        expect(res.body).toHaveProperty('_id');  // Expect the response to have an _id property (book ID)
    });
});
