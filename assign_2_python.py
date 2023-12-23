data = [
    {
        "name" : "Arjun",
        "age" : 30,
        "city" : "Indore"
    },
    {
        "name" : "Karan",
        "age" : 21,
        "city" : "Nagpur"
    },
    {
        "name" : "Aditi",
        "age" : 25,
        "city" : "Pune"
    },
    {
        "name" : "Vishal",
        "age" : 32,
        "city" : "Kolkata"
    },
    {
        "name" : "Tony",
        "age" : 28,
        "city" : "Delhi"
    },
    {
        "name" : "Rishabh",
        "age" : 15,
        "city" : "Surat"
    },    
]

def filter(data):
    """ Task 2. Function to filter data list for persons who are under the age of 25.
    Age 25 is excluded.
    """
    filtered_data = []
    for item in data:
        if item["age"] < 25:
            filtered_data.append(item)
    return filtered_data

def sorting(data):
    """
    Sort the data list based on their city in alphabetical order.
    """
    return sorted(data, key=lambda x : x['city'])
    
def print_data(data):
    """
    Formatting the output and printing it to console.
    """
    for item in data:
        print(f"name : {item['name']}, age: {item['age']}, city: {item['city']} ")

def main():
    """
    Final Solution Script to solve task in order.
    """

    # Filter out persons who are under the age of 25.
    filtered_data = filter(data)

    # Sort the remaining persons based on their city in alphabetical order.
    sort_filtered_data = sorting(filtered_data)

    # Print the final list of persons to the console, including their name, age, and city.
    print_data(sort_filtered_data)

main()