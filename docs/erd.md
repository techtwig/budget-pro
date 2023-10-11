## Table: users
| Column   | Type       | Notes                   |
| -------- | ---------- | ------------------------ |
| id       | increments |                        |
| name     | string(10) |                        |
| password | integer    |                        |

## Table: incomes
| Column       | Type       | Notes                            |
| ------------ | ---------- | --------------------------------- |
| id           | increments |                                 |
| title        | string(10) |                                 |
| user_id (FK) | integer    | (Foreign Key to users)         |
| value        | decimal    |                                 |
| date         | date       |                                 |
| timestamps   | timestamps |                                 |

## Table: expense_types
| Column       | Type       | Notes                            |
| ------------ | ---------- | --------------------------------- |
| id           | increments |                                 |
| user_id (FK) | integer    | (Foreign Key to users)         |
| name         | string(255) |                                |
| timestamps   | timestamps |                                 |

## Table: plans
| Column      | Type        | Notes                     |
| ----------- | ----------- | ------------------------- |
| id          | increments  |                           |
| user_id     | integer     | (Foreign Key to users)   |
| name        | string (255) |                           |
| description | string (255) |                           |
| timestamps  | timestamps  |                           |

## Table: plan_items
| Column         | Type        | Notes                        |
| -------------- | ----------- | ---------------------------- |
| id             | increments  |                              |
| plan_id        | integer     | (Foreign Key to plans)      |
| expense_type_id | integer   | (Foreign Key to expense_types) |
| description    | string (255) |                              |
| timestamps     | timestamps  |                              |

## Table: expenses
| Column         | Type        | Notes                        |
| -------------- | ----------- | ---------------------------- |
| id             | increments  |                              |
| parent_id      | integer     | (Foreign Key to expenses)   |
| user_id        | integer     | (Foreign Key to users)      |
| expense_type_id | integer   | (Foreign Key to expense_types) |
| name           | string (255) |                              |
| quantity       | decimal     |                              |
| value          | decimal     |                              |
| comment        | text        |                              |
| date           | date        |                              |
| planned        | boolean     |                              |
| timestamps     | timestamps  |                              |


