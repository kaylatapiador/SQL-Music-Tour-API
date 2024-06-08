require('dotenv').config()

module.exports = {
  "development": {
    use_env_variable:"PG_URI",
    "database":"music_tour_demo",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    use_env_variable:"PG_URI",
    "database": "music_tour_demo",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    use_env_variable:"PG_URI",
    "database": "music_tour_demo",
    "host": "127.0.0.1",
    "dialect": "mysql"
}
}
