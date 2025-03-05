const url: string = "https://www.course-api.com/react-tours-project";

type ResponeData = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

async function fetchData(url: string): Promise<ResponeData[]> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`http error, status code: ${response.status}`);
    }

    const data: ResponeData[] = await response.json();
    return data;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "There was an error...";
    console.log(errorMessage);
    return [];
  }
}

const result: ResponeData[] = await fetchData(url);
console.log(result);

// result.map(val=>{
//     console.log(val.name);

// })
