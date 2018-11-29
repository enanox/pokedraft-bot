export const CREATE_GUILD =
  "CREATE TABLE IF NOT EXISTS GuildCatalog(guildId TEXT PRIMARY KEY, guildName TEXT, adminChannel TEXT, rolesAllowed TEXT, language TEXT, masterSheet TEXT)";
export const CREATE_DIVISION =
  "CREATE TABLE IF NOT EXISTS DivisionCatalog(guildId INT, divisionId INT PRIMARY KEY, divisionName TEXT, members TEXT, pickOrder TEXT)";
