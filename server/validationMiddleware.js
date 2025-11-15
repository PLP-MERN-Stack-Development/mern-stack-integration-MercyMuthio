import { body } from 'express-validator';

export const validatePost = [
  body('title')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Title must be at least 3 characters long'),
  body('content')
    .trim()
    .isLength({ min: 10 })
    .withMessage('Content must be at least 10 characters long')
];

export const validateComment = [
  body('content')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Comment content is required')
];
