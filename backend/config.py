import configparser
import os

config = configparser.ConfigParser()

# Make sure this path points correctly to application.properties
config_file_path = os.path.join(os.path.dirname(__file__), 'application.properties')
config.read(config_file_path)

def get(section, key):
    try:
        return config[section][key]
    except KeyError:
        raise KeyError(f"Key '{key}' not found in section '{section}'")


# import configparser 

# config = configparser.ConfigParser()
# config.read('/backend/application.properties')


# def get(section: str, key: str):
#     return config[section][key]

