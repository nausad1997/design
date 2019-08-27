 


//program to find length of rest parameter
 // let multiply=(...input)=>
// // {
// // 	return input.length;
// // }
// // console.log(multiply("nausad",5,8,9,4))
// // {
// // 	if(x==0 || y==0)
// // 	{
// // 		 x=1;
// // 		 y=1;
// // 		 //console.log(x*y);
// // 		//let y=1;
// // 		//return x*y;
// // 	}
// // 	// else if (y==0) 
// // 	// {
// // 	// 	var y=1;
// // 	// 	console.log(y)

// // 	return x*y;
// // }
// // console.log(multiply(0,5))




// program to find largest prime factor of a number
// let factor=(n)=>
// {
//  for(var i=2;i<=n;i++)
//     {
//         if(n%i===0)
//         {
//             n/=i;
//             i--;
            
//         }
        
//     }
//     return i;
// }
// console.log(factor(600851475143));




//program to find multiplication of two number irrespective of input passed
// let multiply=(x,y)=>
// {
// 	//var n=(typeof x);
// 	// if(typeof x=='string')
// 	// {
// 	// 	console.log("hi");
// 	// }
// 	 console.log(typeof x);
// 	 console.log(y);
// 	 if(x==null||x==undefined||typeof x=="string")
// 	{
// 		x=1;
// 		//y=1;
// 		//return x*y;
// 	}
// 	if(y==null||/*y<=0*/y==undefined||typeof y=="string")
// 	{
// 		y=1;
// 	}
// 	// if(x==' ')
// 	// {
// 	// 	x=1;
// 	// }
// 	// if(y==' ')
// 	// {
// 	// 	y=1;
// 	// }
// 	// else
// 	// {
// 	// 	return x*y;
// 	// }
// 	return x*y;	
// 	// console.log(x)
// 	// console.log(y)
// 	// return x*y;

// }
// console.log(multiply(-9,-7))





//program that takes input as rest parameters and return concanated string, 
//                                //irrespective of the data type passed as argument to the function
//                                //like("aa",3)
//                                //output-aa3
// let convertTemplate=(...rest)=>
// {
// 	 var n;
// 	// for(x in rest)

// 	// {
// 		//console.log(x);
// 		n=rest.toString();
		

// 		//var b=b.concat(n);
// 		// console.log(n);
		
// 		//console.log(b);
// 	// }
// 	var replaceString=n.replace(/,/g,"")
// 	return replaceString;
	
// }
// console.log(convertTemplate("aa",3,4,6,4,3,2,6," ","s"));





/*
Complete the code in Index.js in a way that 
the function should return a single object
 which has key as the parameter someKey and value as someValue

*/
// let convertToKeyValuePair = (someKey,someValue)=>
//{
// 
//     let keyimstoring=someKey;
//     let valueimstoring=someValue;
//     let finalobject={
//         [keyimstoring]:valueimstoring
        
//     };
//     console.log(finalobject);
//     //return finalobject;

// };
// convertToKeyValuePair("first name","Nausad")
// //module.exports = {convertToKeyValuePair:convertToKeyValuePair};






// Given below is the list of cities in the states of India . You are supposed to complete
// the function given after this list which takes input as state name and sends output as 
// a csv of firstLetter of all the cities in that particular state 

// sample input - findCityFunction("Manipur")
// output - "I,L,M,T"
// explanation - "Imphal*","Lilong","Mayang Imphal","Thoubal" have their first letters as I, L, M and T

let cityData = {
    "Andaman and Nicobar Islands": [
      "Port Blair*"
    ],
    "Andhra Pradesh": [
      "Adoni",
      "Amalapuram",
      "Anakapalle",
      "Anantapur",
      "Bapatla",
      "Bheemunipatnam",
      "Bhimavaram",
      "Bobbili",
      "Chilakaluripet",
      "Chirala",
      "Chittoor",
      "Dharmavaram",
      "Eluru",
      "Gooty",
      "Gudivada",
      "Gudur",
      "Guntakal",
      "Guntur",
      "Hindupur",
      "Jaggaiahpet",
      "Jammalamadugu",
      "Kadapa",
      "Kadiri",
      "Kakinada",
      "Kandukur",
      "Kavali",
      "Kovvur",
      "Kurnool",
      "Macherla",
      "Machilipatnam",
      "Madanapalle",
      "Mandapeta",
      "Markapur",
      "Nagari",
      "Naidupet",
      "Nandyal",
      "Narasapuram",
      "Narasaraopet",
      "Narsipatnam",
      "Nellore",
      "Nidadavole",
      "Nuzvid",
      "Ongole",
      "Palacole",
      "Palasa Kasibugga",
      "Parvathipuram",
      "Pedana",
      "Peddapuram",
      "Pithapuram",
      "Ponnur",
      "Proddatur",
      "Punganur",
      "Puttur",
      "Rajahmundry",
      "Rajam",
      "Rajampet",
      "Ramachandrapuram",
      "Rayachoti",
      "Rayadurg",
      "Renigunta",
      "Repalle",
      "Salur",
      "Samalkot",
      "Sattenapalle",
      "Srikakulam",
      "Srikalahasti",
      "Srisailam Project (Right Flank Colony) Township",
      "Sullurpeta",
      "Tadepalligudem",
      "Tadpatri",
      "Tanuku",
      "Tenali",
      "Tirupati",
      "Tiruvuru",
      "Tuni",
      "Uravakonda",
      "Venkatagiri",
      "Vijayawada",
      "Vinukonda",
      "Visakhapatnam",
      "Vizianagaram",
      "Yemmiganur",
      "Yerraguntla"
    ],
    "Arunachal Pradesh": [
      "Naharlagun",
      "Pasighat"
    ],
    "Assam": [
      "Barpeta",
      "Bongaigaon City",
      "Dhubri",
      "Dibrugarh",
      "Diphu",
      "Goalpara",
      "Guwahati",
      "Jorhat",
      "Karimganj",
      "Lanka",
      "Lumding",
      "Mangaldoi",
      "Mankachar",
      "Margherita",
      "Mariani",
      "Marigaon",
      "Nagaon",
      "Nalbari",
      "North Lakhimpur",
      "Rangia",
      "Sibsagar",
      "Silapathar",
      "Silchar",
      "Tezpur",
      "Tinsukia"
    ],
    "Bihar": [
      "Araria",
      "Arrah",
      "Arwal",
      "Asarganj",
      "Aurangabad",
      "Bagaha",
      "Barh",
      "Begusarai",
      "Bettiah",
      "Bhabua",
      "Bhagalpur",
      "Buxar",
      "Chhapra",
      "Darbhanga",
      "Dehri-on-Sone",
      "Dumraon",
      "Forbesganj",
      "Gaya",
      "Gopalganj",
      "Hajipur",
      "Jamalpur",
      "Jamui",
      "Jehanabad",
      "Katihar",
      "Kishanganj",
      "Lakhisarai",
      "Lalganj",
      "Madhepura",
      "Madhubani",
      "Maharajganj",
      "Mahnar Bazar",
      "Makhdumpur",
      "Maner",
      "Manihari",
      "Marhaura",
      "Masaurhi",
      "Mirganj",
      "Mokameh",
      "Motihari",
      "Motipur",
      "Munger",
      "Murliganj",
      "Muzaffarpur",
      "Narkatiaganj",
      "Naugachhia",
      "Nawada",
      "Nokha",
      "Patna*",
      "Piro",
      "Purnia",
      "Rafiganj",
      "Rajgir",
      "Ramnagar",
      "Raxaul Bazar",
      "Revelganj",
      "Rosera",
      "Saharsa",
      "Samastipur",
      "Sasaram",
      "Sheikhpura",
      "Sheohar",
      "Sherghati",
      "Silao",
      "Sitamarhi",
      "Siwan",
      "Sonepur",
      "Sugauli",
      "Sultanganj",
      "Supaul",
      "Warisaliganj"
    ],
    "Chandigarh": [
      "Chandigarh*"
    ],
    "Chhattisgarh": [
      "Ambikapur",
      "Bhatapara",
      "Bhilai Nagar",
      "Bilaspur",
      "Chirmiri",
      "Dalli-Rajhara",
      "Dhamtari",
      "Durg",
      "Jagdalpur",
      "Korba",
      "Mahasamund",
      "Manendragarh",
      "Mungeli",
      "Naila Janjgir",
      "Raigarh",
      "Raipur*",
      "Rajnandgaon",
      "Sakti",
      "Tilda Newra"
    ],
    "Dadra and Nagar Haveli": [
      "Silvassa*"
    ],
    "Delhi": [
      "Delhi",
      "New Delhi*"
    ],
    "Goa": [
      "Mapusa",
      "Margao",
      "Marmagao",
      "Panaji*"
    ],
    "Gujarat": [
      "Adalaj",
      "Ahmedabad",
      "Amreli",
      "Anand",
      "Anjar",
      "Ankleshwar",
      "Bharuch",
      "Bhavnagar",
      "Bhuj",
      "Chhapra",
      "Deesa",
      "Dhoraji",
      "Godhra",
      "Jamnagar",
      "Kadi",
      "Kapadvanj",
      "Keshod",
      "Khambhat",
      "Lathi",
      "Limbdi",
      "Lunawada",
      "Mahesana",
      "Mahuva",
      "Manavadar",
      "Mandvi",
      "Mangrol",
      "Mansa",
      "Mahemdabad",
      "Modasa",
      "Morvi",
      "Nadiad",
      "Navsari",
      "Padra",
      "Palanpur",
      "Palitana",
      "Pardi",
      "Patan",
      "Petlad",
      "Porbandar",
      "Radhanpur",
      "Rajkot",
      "Rajpipla",
      "Rajula",
      "Ranavav",
      "Rapar",
      "Salaya",
      "Sanand",
      "Savarkundla",
      "Sidhpur",
      "Sihor",
      "Songadh",
      "Surat",
      "Talaja",
      "Thangadh",
      "Tharad",
      "Umbergaon",
      "Umreth",
      "Una",
      "Unjha",
      "Upleta",
      "Vadnagar",
      "Vadodara",
      "Valsad",
      "Vapi",
      "Vapi",
      "Veraval",
      "Vijapur",
      "Viramgam",
      "Visnagar",
      "Vyara",
      "Wadhwan",
      "Wankaner"
    ],
    "Haryana": [
      "Bahadurgarh",
      "Bhiwani",
      "Charkhi Dadri",
      "Faridabad",
      "Fatehabad",
      "Gohana",
      "Gurgaon",
      "Hansi",
      "Hisar",
      "Jind",
      "Kaithal",
      "Karnal",
      "Ladwa",
      "Mahendragarh",
      "Mandi Dabwali",
      "Narnaul",
      "Narwana",
      "Palwal",
      "Panchkula",
      "Panipat",
      "Pehowa",
      "Pinjore",
      "Rania",
      "Ratia",
      "Rewari",
      "Rohtak",
      "Safidon",
      "Samalkha",
      "Sarsod",
      "Shahbad",
      "Sirsa",
      "Sohna",
      "Sonipat",
      "Taraori",
      "Thanesar",
      "Tohana",
      "Yamunanagar"
    ],
    "Himachal Pradesh": [
      "Mandi",
      "Nahan",
      "Palampur",
      "Shimla*",
      "Solan",
      "Sundarnagar"
    ],
    "Jammu and Kashmir": [
      "Anantnag",
      "Baramula",
      "Jammu",
      "Kathua",
      "Punch",
      "Rajauri",
      "Sopore",
      "Srinagar*",
      "Udhampur"
    ],
    "Jharkhand": [
      "Adityapur",
      "Bokaro Steel City",
      "Chaibasa",
      "Chatra",
      "Chirkunda",
      "Medininagar (Daltonganj)",
      "Deoghar",
      "Dhanbad",
      "Dumka",
      "Giridih",
      "Gumia",
      "Hazaribag",
      "Jamshedpur",
      "Jhumri Tilaiya",
      "Lohardaga",
      "Madhupur",
      "Mihijam",
      "Musabani",
      "Pakaur",
      "Patratu",
      "Phusro",
      "Ramgarh",
      "Ranchi*",
      "Sahibganj",
      "Saunda",
      "Simdega",
      "Tenu dam-cum-Kathhara"
    ],
    "Karnataka": [
      "Adyar",
      "Afzalpur",
      "Arsikere",
      "Athni",
      "Bengaluru",
      "Belagavi",
      "Ballari",
      "Chikkamagaluru",
      "Davanagere",
      "Gokak",
      "Hubli-Dharwad",
      "Karwar",
      "Kolar",
      "Lakshmeshwar",
      "Lingsugur",
      "Maddur",
      "Madhugiri",
      "Madikeri",
      "Magadi",
      "Mahalingapura",
      "Malavalli",
      "Malur",
      "Mandya",
      "Mangaluru",
      "Manvi",
      "Mudalagi",
      "Mudabidri",
      "Muddebihal",
      "Mudhol",
      "Mulbagal",
      "Mundargi",
      "Nanjangud",
      "Nargund",
      "Navalgund",
      "Nelamangala",
      "Pavagada",
      "Piriyapatna",
      "Puttur",
      "Rabkavi Banhatti",
      "Raayachuru",
      "Ranebennuru",
      "Ramanagaram",
      "Ramdurg",
      "Ranibennur",
      "Robertson Pet",
      "Ron",
      "Sadalagi",
      "Sagara",
      "Sakaleshapura",
      "Sindagi",
      "Sanduru",
      "Sankeshwara",
      "Saundatti-Yellamma",
      "Savanur",
      "Sedam",
      "Shahabad",
      "Shahpur",
      "Shiggaon",
      "Shikaripur",
      "Shivamogga",
      "Surapura",
      "Shrirangapattana",
      "Sidlaghatta",
      "Sindhagi",
      "Sindhnur",
      "Sira",
      "Sirsi",
      "Siruguppa",
      "Srinivaspur",
      "Tarikere",
      "Tekkalakote",
      "Terdal",
      "Talikota",
      "Tiptur",
      "Tumkur",
      "Udupi",
      "Vijayapura",
      "Wadi",
      "Yadgir"
    ],
    "Karnatka": [
      "Mysore"
    ],
    "Kerala": [
      "Adoor",
      "Alappuzha",
      "Attingal",
      "Chalakudy",
      "Changanassery",
      "Cherthala",
      "Chittur-Thathamangalam",
      "Guruvayoor",
      "Kanhangad",
      "Kannur",
      "Kasaragod",
      "Kayamkulam",
      "Kochi",
      "Kodungallur",
      "Kollam",
      "Kottayam",
      "Kozhikode",
      "Kunnamkulam",
      "Malappuram",
      "Mattannur",
      "Mavelikkara",
      "Mavoor",
      "Muvattupuzha",
      "Nedumangad",
      "Neyyattinkara",
      "Nilambur",
      "Ottappalam",
      "Palai",
      "Palakkad",
      "Panamattom",
      "Panniyannur",
      "Pappinisseri",
      "Paravoor",
      "Pathanamthitta",
      "Peringathur",
      "Perinthalmanna",
      "Perumbavoor",
      "Ponnani",
      "Punalur",
      "Puthuppally",
      "Koyilandy",
      "Shoranur",
      "Taliparamba",
      "Thiruvalla",
      "Thiruvananthapuram",
      "Thodupuzha",
      "Thrissur",
      "Tirur",
      "Vaikom",
      "Varkala",
      "Vatakara"
    ],
    "Madhya Pradesh": [
      "Alirajpur",
      "Ashok Nagar",
      "Balaghat",
      "Bhopal",
      "Ganjbasoda",
      "Gwalior",
      "Indore",
      "Itarsi",
      "Jabalpur",
      "Lahar",
      "Maharajpur",
      "Mahidpur",
      "Maihar",
      "Malaj Khand",
      "Manasa",
      "Manawar",
      "Mandideep",
      "Mandla",
      "Mandsaur",
      "Mauganj",
      "Mhow Cantonment",
      "Mhowgaon",
      "Morena",
      "Multai",
      "Mundi",
      "Murwara (Katni)",
      "Nagda",
      "Nainpur",
      "Narsinghgarh",
      "Narsinghgarh",
      "Neemuch",
      "Nepanagar",
      "Niwari",
      "Nowgong",
      "Nowrozabad (Khodargama)",
      "Pachore",
      "Pali",
      "Panagar",
      "Pandhurna",
      "Panna",
      "Pasan",
      "Pipariya",
      "Pithampur",
      "Porsa",
      "Prithvipur",
      "Raghogarh-Vijaypur",
      "Rahatgarh",
      "Raisen",
      "Rajgarh",
      "Ratlam",
      "Rau",
      "Rehli",
      "Rewa",
      "Sabalgarh",
      "Sagar",
      "Sanawad",
      "Sarangpur",
      "Sarni",
      "Satna",
      "Sausar",
      "Sehore",
      "Sendhwa",
      "Seoni",
      "Seoni-Malwa",
      "Shahdol",
      "Shajapur",
      "Shamgarh",
      "Sheopur",
      "Shivpuri",
      "Shujalpur",
      "Sidhi",
      "Sihora",
      "Singrauli",
      "Sironj",
      "Sohagpur",
      "Tarana",
      "Tikamgarh",
      "Ujjain",
      "Umaria",
      "Vidisha",
      "Vijaypur",
      "Wara Seoni"
    ],
    "Maharashtra": [
      "[[]]",
      "Ahmednagar",
      "Akola",
      "Akot",
      "Amalner",
      "Ambejogai",
      "Amravati",
      "Anjangaon",
      "Arvi",
      "Aurangabad",
      "Bhiwandi",
      "Dhule",
      "Kalyan-Dombivali",
      "Ichalkaranji",
      "Kalyan-Dombivali",
      "Karjat",
      "Latur",
      "Loha",
      "Lonar",
      "Lonavla",
      "Mahad",
      "Malegaon",
      "Malkapur",
      "Mangalvedhe",
      "Mangrulpir",
      "Manjlegaon",
      "Manmad",
      "Manwath",
      "Mehkar",
      "Mhaswad",
      "Mira-Bhayandar",
      "Morshi",
      "Mukhed",
      "Mul",
      "Greater Mumbai*",
      "Murtijapur",
      "Nagpur",
      "Nanded-Waghala",
      "Nandgaon",
      "Nandura",
      "Nandurbar",
      "Narkhed",
      "Nashik",
      "Navi Mumbai",
      "Nawapur",
      "Nilanga",
      "Osmanabad",
      "Ozar",
      "Pachora",
      "Paithan",
      "Palghar",
      "Pandharkaoda",
      "Pandharpur",
      "Panvel",
      "Parbhani",
      "Parli",
      "Partur",
      "Pathardi",
      "Pathri",
      "Patur",
      "Pauni",
      "Pen",
      "Phaltan",
      "Pulgaon",
      "Pune",
      "Purna",
      "Pusad",
      "Rahuri",
      "Rajura",
      "Ramtek",
      "Ratnagiri",
      "Raver",
      "Risod",
      "Sailu",
      "Sangamner",
      "Sangli",
      "Sangole",
      "Sasvad",
      "Satana",
      "Satara",
      "Savner",
      "Sawantwadi",
      "Shahade",
      "Shegaon",
      "Shendurjana",
      "Shirdi",
      "Shirpur-Warwade",
      "Shirur",
      "Shrigonda",
      "Shrirampur",
      "Sillod",
      "Sinnar",
      "Solapur",
      "Soyagaon",
      "Talegaon Dabhade",
      "Talode",
      "Tasgaon",
      "Thane",
      "Tirora",
      "Tuljapur",
      "Tumsar",
      "Uchgaon",
      "Udgir",
      "Umarga",
      "Umarkhed",
      "Umred",
      "Uran",
      "Uran Islampur",
      "Vadgaon Kasba",
      "Vaijapur",
      "Vasai-Virar",
      "Vita",
      "Wadgaon Road",
      "Wai",
      "Wani",
      "Wardha",
      "Warora",
      "Warud",
      "Washim",
      "Yavatmal",
      "Yawal",
      "Yevla"
    ],
    "Manipur": [
      "Imphal*",
      "Lilong",
      "Mayang Imphal",
      "Thoubal"
    ],
    "Meghalaya": [
      "Nongstoin",
      "Shillong*",
      "Tura"
    ],
    "Mizoram": [
      "Aizawl",
      "Lunglei",
      "Saiha"
    ],
    "Nagaland": [
      "Dimapur",
      "Kohima*",
      "Mokokchung",
      "Tuensang",
      "Wokha",
      "Zunheboto"
    ],
    "Odisha": [
      "Balangir",
      "Baleshwar Town",
      "Barbil",
      "Bargarh",
      "Baripada Town",
      "Bhadrak",
      "Bhawanipatna",
      "Bhubaneswar*",
      "Brahmapur",
      "Byasanagar",
      "Cuttack",
      "Dhenkanal",
      "Jatani",
      "Jharsuguda",
      "Kendrapara",
      "Kendujhar",
      "Malkangiri",
      "Nabarangapur",
      "Paradip",
      "Parlakhemundi",
      "Pattamundai",
      "Phulabani",
      "Puri",
      "Rairangpur",
      "Rajagangapur",
      "Raurkela",
      "Rayagada",
      "Sambalpur",
      "Soro",
      "Sunabeda",
      "Sundargarh",
      "Talcher",
      "Tarbha",
      "Titlagarh"
    ],
    "Puducherry": [
      "Karaikal",
      "Mahe",
      "Pondicherry*",
      "Yanam"
    ],
    "Punjab": [
      "Amritsar",
      "Barnala",
      "Batala",
      "Bathinda",
      "Dhuri",
      "Faridkot",
      "Fazilka",
      "Firozpur",
      "Firozpur Cantt.",
      "Gobindgarh",
      "Gurdaspur",
      "Hoshiarpur",
      "Jagraon",
      "Jalandhar Cantt.",
      "Jalandhar",
      "Kapurthala",
      "Khanna",
      "Kharar",
      "Kot Kapura",
      "Longowal",
      "Ludhiana",
      "Malerkotla",
      "Malout",
      "Mansa",
      "Moga",
      "Mohali",
      "Morinda, India",
      "Mukerian",
      "Muktsar",
      "Nabha",
      "Nakodar",
      "Nangal",
      "Nawanshahr",
      "Pathankot",
      "Patiala",
      "Pattran",
      "Patti",
      "Phagwara",
      "Phillaur",
      "Qadian",
      "Raikot",
      "Rajpura",
      "Rampura Phul",
      "Rupnagar",
      "Samana",
      "Sangrur",
      "Sirhind Fatehgarh Sahib",
      "Sujanpur",
      "Sunam",
      "Talwara",
      "Tarn Taran",
      "Urmar Tanda",
      "Zira",
      "Zirakpur"
    ],
    "Rajasthan": [
      "Ajmer",
      "Alwar",
      "Bikaner",
      "Bharatpur",
      "Bhilwara",
      "Jaipur*",
      "Jodhpur",
      "Lachhmangarh",
      "Ladnu",
      "Lakheri",
      "Lalsot",
      "Losal",
      "Makrana",
      "Malpura",
      "Mandalgarh",
      "Mandawa",
      "Mangrol",
      "Merta City",
      "Mount Abu",
      "Nadbai",
      "Nagar",
      "Nagaur",
      "Nasirabad",
      "Nathdwara",
      "Neem-Ka-Thana",
      "Nimbahera",
      "Nohar",
      "Nokha",
      "Pali",
      "Phalodi",
      "Phulera",
      "Pilani",
      "Pilibanga",
      "Pindwara",
      "Pipar City",
      "Prantij",
      "Pratapgarh",
      "Raisinghnagar",
      "Rajakhera",
      "Rajaldesar",
      "Rajgarh (Alwar)",
      "Rajgarh (Churu)",
      "Rajsamand",
      "Ramganj Mandi",
      "Ramngarh",
      "Ratangarh",
      "Rawatbhata",
      "Rawatsar",
      "Reengus",
      "Sadri",
      "Sadulshahar",
      "Sadulpur",
      "Sagwara",
      "Sambhar",
      "Sanchore",
      "Sangaria",
      "Sardarshahar",
      "Sawai Madhopur",
      "Shahpura",
      "Shahpura",
      "Sheoganj",
      "Sikar",
      "Sirohi",
      "Sojat",
      "Sri Madhopur",
      "Sujangarh",
      "Sumerpur",
      "Suratgarh",
      "Taranagar",
      "Todabhim",
      "Todaraisingh",
      "Tonk",
      "Udaipur",
      "Udaipurwati",
      "Vijainagar, Ajmer"
    ],
    "Tamil Nadu": [
      "Arakkonam",
      "Aruppukkottai",
      "Chennai*",
      "Coimbatore",
      "Erode",
      "Gobichettipalayam",
      "Kancheepuram",
      "Karur",
      "Lalgudi",
      "Madurai",
      "Manachanallur",
      "Nagapattinam",
      "Nagercoil",
      "Namagiripettai",
      "Namakkal",
      "Nandivaram-Guduvancheri",
      "Nanjikottai",
      "Natham",
      "Nellikuppam",
      "Neyveli (TS)",
      "O' Valley",
      "Oddanchatram",
      "P.N.Patti",
      "Pacode",
      "Padmanabhapuram",
      "Palani",
      "Palladam",
      "Pallapatti",
      "Pallikonda",
      "Panagudi",
      "Panruti",
      "Paramakudi",
      "Parangipettai",
      "Pattukkottai",
      "Perambalur",
      "Peravurani",
      "Periyakulam",
      "Periyasemur",
      "Pernampattu",
      "Pollachi",
      "Polur",
      "Ponneri",
      "Pudukkottai",
      "Pudupattinam",
      "Puliyankudi",
      "Punjaipugalur",
      "Ranipet",
      "Rajapalayam",
      "Ramanathapuram",
      "Rameshwaram",
      "Rasipuram",
      "Salem",
      "Sankarankoil",
      "Sankari",
      "Sathyamangalam",
      "Sattur",
      "Shenkottai",
      "Sholavandan",
      "Sholingur",
      "Sirkali",
      "Sivaganga",
      "Sivagiri",
      "Sivakasi",
      "Srivilliputhur",
      "Surandai",
      "Suriyampalayam",
      "Tenkasi",
      "Thammampatti",
      "Thanjavur",
      "Tharamangalam",
      "Tharangambadi",
      "Theni Allinagaram",
      "Thirumangalam",
      "Thirupuvanam",
      "Thiruthuraipoondi",
      "Thiruvallur",
      "Thiruvarur",
      "Thuraiyur",
      "Tindivanam",
      "Tiruchendur",
      "Tiruchengode",
      "Tiruchirappalli",
      "Tirukalukundram",
      "Tirukkoyilur",
      "Tirunelveli",
      "Tirupathur",
      "Tirupathur",
      "Tiruppur",
      "Tiruttani",
      "Tiruvannamalai",
      "Tiruvethipuram",
      "Tittakudi",
      "Udhagamandalam",
      "Udumalaipettai",
      "Unnamalaikadai",
      "Usilampatti",
      "Uthamapalayam",
      "Uthiramerur",
      "Vadakkuvalliyur",
      "Vadalur",
      "Vadipatti",
      "Valparai",
      "Vandavasi",
      "Vaniyambadi",
      "Vedaranyam",
      "Vellakoil",
      "Vellore",
      "Vikramasingapuram",
      "Viluppuram",
      "Virudhachalam",
      "Virudhunagar",
      "Viswanatham"
    ],
    "Telangana": [
      "Adilabad",
      "Bellampalle",
      "Bhadrachalam",
      "Bhainsa",
      "Bhongir",
      "Bodhan",
      "Farooqnagar",
      "Gadwal",
      "Hyderabad*",
      "Jagtial",
      "Jangaon",
      "Kagaznagar",
      "Kamareddy",
      "Karimnagar",
      "Khammam",
      "Koratla",
      "Kothagudem",
      "Kyathampalle",
      "Mahbubnagar",
      "Mancherial",
      "Mandamarri",
      "Manuguru",
      "Medak",
      "Miryalaguda",
      "Nagarkurnool",
      "Narayanpet",
      "Nirmal",
      "Nizamabad",
      "Palwancha",
      "Ramagundam",
      "Sadasivpet",
      "Sangareddy",
      "Siddipet",
      "Sircilla",
      "Suryapet",
      "Tandur",
      "Vikarabad",
      "Wanaparthy",
      "Warangal",
      "Yellandu"
    ],
    "Tripura": [
      "Agartala*",
      "Belonia",
      "Dharmanagar",
      "Kailasahar",
      "Khowai",
      "Pratapgarh",
      "Udaipur"
    ],
    "Uttar Pradesh": [
      "Achhnera",
      "Agra",
      "Aligarh",
      "Allahabad",
      "Amroha",
      "Azamgarh",
      "Bahraich",
      "Chandausi",
      "Etawah",
      "Firozabad",
      "Fatehpur Sikri",
      "Hapur",
      "Hardoi *",
      "Jhansi",
      "Kalpi",
      "Kanpur",
      "Khair",
      "Laharpur",
      "Lakhimpur",
      "Lal Gopalganj Nindaura",
      "Lalitpur",
      "Lalganj",
      "Lar",
      "Loni",
      "Lucknow*",
      "Mathura",
      "Meerut",
      "Modinagar",
      "Moradabad",
      "Nagina",
      "Najibabad",
      "Nakur",
      "Nanpara",
      "Naraura",
      "Naugawan Sadat",
      "Nautanwa",
      "Nawabganj",
      "Nehtaur",
      "Niwai",
      "Noida",
      "Noorpur",
      "Obra",
      "Orai",
      "Padrauna",
      "Palia Kalan",
      "Parasi",
      "Phulpur",
      "Pihani",
      "Pilibhit",
      "Pilkhuwa",
      "Powayan",
      "Pukhrayan",
      "Puranpur",
      "Purquazi",
      "Purwa",
      "Rae Bareli",
      "Rampur",
      "Rampur Maniharan",
      "Rampur Maniharan",
      "Rasra",
      "Rath",
      "Renukoot",
      "Reoti",
      "Robertsganj",
      "Rudauli",
      "Rudrapur",
      "Sadabad",
      "Safipur",
      "Saharanpur",
      "Sahaspur",
      "Sahaswan",
      "Sahawar",
      "Sahjanwa",
      "Saidpur",
      "Sambhal",
      "Samdhan",
      "Samthar",
      "Sandi",
      "Sandila",
      "Sardhana",
      "Seohara",
      "Shahabad, Hardoi",
      "Shahabad, Rampur",
      "Shahganj",
      "Shahjahanpur",
      "Shamli",
      "Shamsabad, Agra",
      "Shamsabad, Farrukhabad",
      "Sherkot",
      "Shikarpur, Bulandshahr",
      "Shikohabad",
      "Shishgarh",
      "Siana",
      "Sikanderpur",
      "Sikandra Rao",
      "Sikandrabad",
      "Sirsaganj",
      "Sirsi",
      "Sitapur",
      "Soron",
      "Suar",
      "Sultanpur",
      "Sumerpur",
      "Tanda",
      "Thakurdwara",
      "Thana Bhawan",
      "Tilhar",
      "Tirwaganj",
      "Tulsipur",
      "Tundla",
      "Ujhani",
      "Unnao",
      "Utraula",
      "Varanasi",
      "Vrindavan",
      "Warhapur",
      "Zaidpur",
      "Zamania"
    ],
    "Uttarakhand": [
      "Bageshwar",
      "Dehradun",
      "Haldwani-cum-Kathgodam",
      "Hardwar",
      "Kashipur",
      "Manglaur",
      "Mussoorie",
      "Nagla",
      "Nainital",
      "Pauri",
      "Pithoragarh",
      "Ramnagar",
      "Rishikesh",
      "Roorkee",
      "Rudrapur",
      "Sitarganj",
      "Srinagar",
      "Tehri"
    ],
    "West Bengal": [
      "Adra",
      "Alipurduar",
      "Arambagh",
      "Asansol",
      "Baharampur",
      "Balurghat",
      "Bankura",
      "Darjiling",
      "English Bazar",
      "Gangarampur",
      "Habra",
      "Hugli-Chinsurah",
      "Jalpaiguri",
      "Jhargram",
      "Kalimpong",
      "Kharagpur",
      "Kolkata",
      "Mainaguri",
      "Malda",
      "Mathabhanga",
      "Medinipur",
      "Memari",
      "Monoharpur",
      "Murshidabad",
      "Nabadwip",
      "Naihati",
      "Panchla",
      "Pandua",
      "Paschim Punropara",
      "Purulia",
      "Raghunathpur",
      "Raghunathganj",
      "Raiganj",
      "Rampurhat",
      "Ranaghat",
      "Sainthia",
      "Santipur",
      "Siliguri",
      "Sonamukhi",
      "Srirampore",
      "Suri",
      "Taki",
      "Tamluk",
      "Tarakeswar"
    ]
  };
  

let findCityFunction = (stateName)=>{
	var dummy=[];
	for(currentState in cityData)
	{
		if(currentState==stateName)
			{
			if(currentState=="Maharashtra")
			{
				//let tummy=[];
				// tummy=tummy.concat(cityData[currentState][0]);
				//console.log(tummy);
				delete cityData[currentState][0];
				//console.log(cityData[currentState][1]);
				for(city in cityData[currentState])

				   {
				   	     dummy=dummy.concat(cityData[currentState][city].charAt(0));
				   }
				   //dummy.unshift("[[");
				   let something=dummy.toString();
				   //console.log(something);
				   //let something1=tummy.toString();
				   something='"'+something+'"';
				   //console.log(something1);
				   //let murged=something1.concat(something);
				   //murged=murged+'"';
				   return something;


			}
			else
			{
				for(city in cityData[currentState])
                {
         	
         	      dummy=dummy.concat(cityData[currentState][city].charAt(0));

                }
			}
	}
 }
	

	// var anything="[[]]";
	// anything='"'+anything;
	// console.log(anything);
	 var anystring;
	 anystring=dummy.toString();
	 anystring=' "'  +anystring+  '" ';
	 //console.log(anystring);
	 return anystring;

};
console.log(findCityFunction("Assam"));




//program to find a friend from my friendlist!
// var userToFind=window.prompt("Enter the name of the person:");
// //let friendList=(user)=>
// //{
//  var friendList=["Yogesh","Pradeep","Tarun","Shrish","Rahul","Arun","Vikas"];
//     for(var i=0;i<friendList.length;i++)
// {
//          if(userToFind==friendList[i])
//           {
//                   i=Number(i);
//                   i+=1;
//                 console.log("User found at position:"+i);
//                 break;
//            }
             
//    }
// //};
// //friendList("Nausad");





//program to find age of a person
// let calculateAge=(date,month,year)=>
// {
//    let oldMonth=month;
//    let today=new Date(Date.now());
//    let presentDate=today.getDate();
//    presentMonth=today.getMonth();
//    presentMonth+=1;
//    let presentYear=today.getFullYear();
//    birthYear=year;
//    let age=presentYear-birthYear;
//    let presentMonthDays=0;
//    let olderMonthDays=0;
//    let daysINmonth=
//    [
//         {"first":31},
//          {"second":28},
//          {'third':31},
//          {'fourth':30},
//          {'fifth':31},
//          {'sixth':30},
//          {'seventh':31},
//          {'eighth':31},
//         { 'nineth':30},
//         {'tenth':31},
//         { 'eleventh':30},
//         {'twelveth':31}
//    ]
// for(x in daysINmonth)
// {
//    if(oldMonth==x)
//    {
//       for(i=0;i<oldMonth;i++)
//       {
//            for(y in daysINmonth[i]);
//            {
//                olderMonthDays+=daysINmonth[i][y];
                  
//            }
//       }
      
//    }
                  
// }
// for(x in daysINmonth)
// {
      
//    if(presentMonth==x)
//    {
//       for(i=0;i<presentMonth;i++)
//       {
//            for(y in daysINmonth[i]);
//            {
//                presentMonthDays+=daysINmonth[i][y];
                  
//            }
//       }
       
//    }
                  
// }

// let positive=presentMonthDays-olderMonthDays;

// if(positive>0)
//              {
//                return age;
//              }
//              else if(positive<0)
//              {
//                return age-1;
//              }
//              else if(positive==0)
//               { 
//                      let newValue=presentDate-date;
//                       if(newValue>=0)
//                       {
//                            return age;
//                       }
//                       else if(newValue<0)
//                       {
//                            return age-1;
//                       }
//                }
// }
// let newAge=calculateAge(27,8,2018);
// console.log("newAge:"+newAge);
 


 



 