#include <iostream>
#include <fstream>

using namespace std;

int main()
{
    // Object of fstream class
    fstream file;
    // Open file
    file.open("json_sample.json", ios::out);

    // File exists
    if (!file)
    {
        cout << "Error in creating the file";
        return 0;
    }

    // Print other message
    cout << "File created successfully";
    // Close file stream
    file.close();
    // Return the status code
    return 0;
}