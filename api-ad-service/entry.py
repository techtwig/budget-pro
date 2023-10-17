import uvicorn
import os
import argparse
import uvicorn.config
from dotenv import load_dotenv

os.environ["TF_CPP_MIN_LOG_LEVEL"] = "2"

load_dotenv()


def main():
    parser = argparse.ArgumentParser(description="Run the uvicorn server")
    parser.add_argument('--host', type=str, default='0.0.0.0', help= "Host IP address")
    pass


if __name__ == '__main__':
    main()
