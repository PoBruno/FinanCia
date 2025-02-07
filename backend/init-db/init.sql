-- Criação da tabela de usuários
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criação da tabela de categorias (gastos e receitas)
CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    type VARCHAR(10) NOT NULL CHECK (type IN ('expense', 'income'))
);

-- Criação da tabela de centros de custo
CREATE TABLE cost_centers (
    cost_center_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Criação da tabela para transações únicas
CREATE TABLE one_time_transactions (
    transaction_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(user_id),
    category_id INTEGER NOT NULL REFERENCES categories(category_id),
    cost_center_id INTEGER REFERENCES cost_centers(cost_center_id),
    description TEXT,
    amount DECIMAL(10,2) NOT NULL,
    transaction_date DATE NOT NULL
);

-- Criação da tabela para transações recorrentes
CREATE TABLE recurring_transactions (
    recurring_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(user_id),
    category_id INTEGER NOT NULL REFERENCES categories(category_id),
    cost_center_id INTEGER REFERENCES cost_centers(cost_center_id),
    description TEXT,
    amount DECIMAL(10,2) NOT NULL,
    start_date DATE NOT NULL,
    installments INTEGER,
    is_open_ended BOOLEAN NOT NULL DEFAULT FALSE,
    CHECK (
        (installments IS NOT NULL AND is_open_ended = FALSE) OR
        (installments IS NULL AND is_open_ended = TRUE)
    )
);

----------------------------------------------------------------
-- Inserção de dados iniciais

-- Usuários
INSERT INTO users (name, email) VALUES
('Bruno', 'bruno@example.com'),
('Tacy', 'tacy@example.com');

-- Categorias (Gastos e Receitas)
INSERT INTO categories (name, type) VALUES
('Aluguel', 'expense'),
('Condomínio', 'expense'),
('Luz', 'expense'),
('Internet', 'expense'),
('Plano de Saúde', 'expense'),
('Serviços', 'expense'),
('Mercado', 'expense'),
('Carne', 'expense'),
('Reparo', 'expense'),
('Lavanderia', 'expense'),
('Restaurante', 'expense'),
('Deslocamento', 'expense'),
('Salário', 'income'),
('Venda', 'income'),
('Freelance', 'income'),
('Vale Alimentação', 'income');

-- Centros de Custo
INSERT INTO cost_centers (name) VALUES
('Casa'),
('Lazer'),
('Trabalho');

-- Gastos Recorrentes (sem data final definida)
INSERT INTO recurring_transactions (user_id, category_id, cost_center_id, description, amount, start_date, is_open_ended)
VALUES 
(1, 1, 1, 'Aluguel da Casa', 2500.00, '2025-01-01', TRUE),
(1, 2, 1, 'Condomínio', 800.00, '2025-01-01', TRUE),
(1, 3, 1, 'Conta de Luz', 250.00, '2025-01-01', TRUE),
(1, 4, 1, 'Internet', 150.00, '2025-01-01', TRUE),
(1, 5, 1, 'Plano de Saúde', 500.00, '2025-01-01', TRUE);

-- Gastos Recorrentes com parcelas definidas (ex: 6 meses de serviço)
INSERT INTO recurring_transactions (user_id, category_id, cost_center_id, description, amount, start_date, installments, is_open_ended)
VALUES 
(1, 6, 1, 'Serviço de Manutenção', 200.00, '2025-01-01', 6, FALSE);

-- Receitas Recorrentes
INSERT INTO recurring_transactions (user_id, category_id, cost_center_id, description, amount, start_date, is_open_ended)
VALUES 
(1, 13, 3, 'Salário Mensal', 7000.00, '2025-01-01', TRUE),
(1, 16, 3, 'Vale Alimentação', 800.00, '2025-01-01', TRUE);

-- Receitas Recorrentes com parcelas definidas (ex: 3 meses de contrato freelance)
INSERT INTO recurring_transactions (user_id, category_id, cost_center_id, description, amount, start_date, installments, is_open_ended)
VALUES 
(1, 15, 3, 'Freelance de Desenvolvimento', 1500.00, '2025-01-01', 3, FALSE);

-- Gastos Únicos
INSERT INTO one_time_transactions (user_id, category_id, cost_center_id, description, amount, transaction_date) VALUES
(1, 7, 1, 'Supermercado do mês', 600.00, '2025-01-05'),
(1, 8, 1, 'Compra de Carne', 150.00, '2025-01-07'),
(1, 9, 1, 'Reparo do encanamento', 300.00, '2025-01-10'),
(1, 10, 2, 'Lavanderia', 50.00, '2025-01-15'),
(1, 11, 2, 'Restaurante', 120.00, '2025-01-20'),
(1, 12, 2, 'Uber para reunião', 35.00, '2025-01-25');

