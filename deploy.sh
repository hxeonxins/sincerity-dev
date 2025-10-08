#!/bin/bash

# 빌드 디렉토리
BUILD_DIR=dist
TMP_DIR=tmp-deploy

# 현재 브랜치 확인
CURRENT_BRANCH=$(git branch --show-current)
echo "현재 브랜치: $CURRENT_BRANCH"

# 빌드
echo "빌드 시작..."
npm run build
if [ $? -ne 0 ]; then
  echo "빌드 실패!"
  exit 1
fi
echo "빌드 완료!"

# 임시 디렉토리 초기화
rm -rf $TMP_DIR
mkdir $TMP_DIR

# main 브랜치 가져오기
git fetch origin main
git worktree add $TMP_DIR main

# dist 내용 복사 (CNAME 유지)
cp -R $BUILD_DIR/* $TMP_DIR/
if [ -f CNAME ]; then
  cp CNAME $TMP_DIR/CNAME
fi

# 커밋 & 푸시
cd $TMP_DIR
git add -A
git commit -m "Deploy $(date '+%Y-%m-%d %H:%M:%S')"
git push origin main

# 정리
cd ..
git worktree remove $TMP_DIR
echo "배포 완료!"
