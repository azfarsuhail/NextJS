import Image from "next/image"
import Link from "next/link"

const users =[
    {title:"Gmail",
    description:"Gmail is a widely used email service developed by Google. It offers free, efficient, and user-friendly email access through web browsers or mobile apps. With ample storage space, excellent spam filtering, customizable organization features like labels and filters, and integration with other Google services, Gmail has become popular for both personal and professional communication.",
    image:"/gmail.png",
    url : "https://mail.google.com"},
    {title:"Drive",
    description:"Google Drive is a cloud-based file storage and synchronization service provided by Google. It allows users to store files in the cloud, access them from any device with an internet connection, and share files and folders with others. Google Drive offers free storage with options to upgrade for more space, integrates seamlessly with other Google services like Docs, Sheets, and Slides, and provides collaborative features that enable real-time editing and commenting on documents.",
    image:"/drive.png",
    url : "https://drive.google.com"},
    {title:"Sheets",
    description:"Google Sheets is a web-based spreadsheet application developed by Google, offering users the ability to create, edit, and collaborate on spreadsheets online. It's part of the Google Drive office suite and provides functionalities similar to Microsoft Excel. Users can input and manipulate data, perform calculations, create charts and graphs, and share and collaborate in real time with others. Google Sheets offers a variety of templates, functions, and add-ons, making it a versatile tool for personal, academic, or professional use.",
    image:"/sheets.png",
    url : "https://docs.google.com/spreadsheets/"},
    {title:"Youtube",
    description:"YouTube is a video-sharing platform where users can watch, upload, and share videos. It was created in 2005 and has grown into one of the most popular websites globally. Users can find a wide range of content on YouTube, including music videos, tutorials, vlogs, documentaries, and more. It allows creators to reach a vast audience, and viewers can interact through likes, comments, and subscriptions. YouTube offers personalized recommendations based on user activity and preferences, making it a highly engaging platform for both creators and audiences.",
    image:"/youtube.png",
    url:"https://youtube.com"},
    {title:"Translate",
    description:"Google Translate is a free online language translation service developed by Google. It allows users to translate text, websites, documents, and even spoken words or phrases between a vast number of languages. Google Translate uses machine learning and neural network technology to provide translations, and while it's continually improving, translations may sometimes vary in accuracy depending on the complexity and context of the content. It supports various input methods, including typing, speaking, and scanning text using a phone's camera, making it a convenient tool for communication across different languages",
    image:"/translate.png",
    url : "https://translate.google.com/"},
    {title:"Maps",
    description:"Google Maps is a web-based mapping service developed by Google that provides various functionalities for navigation, geographical information, and location-based services. Users can view maps of different regions, get directions for driving, walking, cycling, or public transportation, and explore places through satellite imagery or street view. It offers real-time traffic updates, estimated travel times, and suggestions for nearby restaurants, businesses, and points of interest. Google Maps is accessible through web browsers and mobile apps, offering a comprehensive tool for navigation, exploration, and planning routes.",
    image:"/maps.png",
    url : "https://www.google.com/maps"}    
  ]
  
  export default function Menu(){
    return(
      <div className="flex justify-center mt-14">
        <ul className="w-[90%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {
            users.map((user,i)=>{
              return(
                <li key={i} className="rounded-md shadow-2xl border p-5 m-3">
                  <Image src={user.image} alt={user.title} width={400} height={400} className="rounded-2xl w-full h-[200px]" />
                  <h1 className="font-bold">{user.title} <br /><br /></h1>
                  <p className="">{user.description} </p>
                  <Link href={user.url} className="text-blue-500">Click Here</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }