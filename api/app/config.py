import os

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "your_secret_key")
    ACCESS_TOKEN_EXPIRE_MINUTES = 60
    DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres:password@db:5432/cooking_app")
