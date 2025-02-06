
### **1 Acessar o Container**
No terminal, execute:
```bash
docker exec -it postgres psql -U postgres -d FinanCia
```

---

### **2.0 Selecionar todos os usuários**
```sql
SELECT * FROM users;
```

### **2.1 Selecionar todas as categorias**
```sql
SELECT * FROM categories;
```

### **2.2 Filtrar despesas de janeiro de 2025**
```sql
SELECT * FROM one_time_transactions
WHERE transaction_date BETWEEN '2025-01-01' AND '2025-01-31';
```

### **2.3 Filtrar receitas de janeiro de 2025**
```sql
SELECT * FROM recurring_transactions
WHERE category_id IN (SELECT category_id FROM categories WHERE type = 'income')
AND start_date <= '2025-01-31';
```

### **2.4 Filtrar todas as transações recorrentes que continuam ativas em janeiro de 2025**
```sql
SELECT * FROM recurring_transactions
WHERE start_date <= '2025-01-31'
AND (is_open_ended = TRUE OR (installments IS NOT NULL AND start_date + (installments || ' month')::INTERVAL >= '2025-01-01'));
```

---

### **Explicação**
- Os comandos listam as transações e os cadastros iniciais.
- A última query filtra transações recorrentes que ainda estão ativas em janeiro de 2025 (sem data final ou dentro do período de parcelas).

Esse setup garante que você e a Tacy tenham uma visão completa das finanças! 🚀


