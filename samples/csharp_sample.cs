class Database
{
    private MySqlConnection connection;
    private string server;

    public void Insert()
    {
        string query = "INSERT INTO tableinfo (name) VALUES ('John Doe')";

        MySqlConnection cmd = new MySqlConnection(query, connection);
        cmd.ExecuteNonQuery();
        this.CloseConnection();
    }
}