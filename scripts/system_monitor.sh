#!/bin/bash
# Моніторинг ресурсів системи

OUT="/opt/logs/system_usage.log"

echo "==== $(date) ====" >> "$OUT"

echo "CPU:" >> "$OUT"
top -b -n1 | head -n 5 >> "$OUT"

echo "ПАМʼЯТЬ:" >> "$OUT"
free -h >> "$OUT"

echo "ДИСК:" >> "$OUT"
df -h >> "$OUT"

echo "" >> "$OUT"
