#!/bin/bash
# Скрипт резервного копіювання

SRC="/home/sc/data"
DEST="/opt/backup"
DATE=$(date +"%Y-%m-%d")

mkdir -p "$DEST"
tar -czf "$DEST/backup-$DATE.tar.gz" "$SRC"
