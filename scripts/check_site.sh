#!/bin/bash
# Перевірка доступності веб-сайту

URL="https://google.com"
LOG="/opt/logs/site_check.log"

if curl -s --head "$URL" | grep "200 OK" > /dev/null; then
  echo "$(date) - САЙТ ДОСТУПНИЙ" >> "$LOG"
else
  echo "$(date) - САЙТ НЕДОСТУПНИЙ" >> "$LOG"
fi
