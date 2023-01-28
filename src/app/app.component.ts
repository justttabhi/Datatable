import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'data-table';
	isDataTableLoaded: boolean = true;
	dtOptions: DataTables.Settings = {};
	prodList: any = [{
		"id": 19,
		"product_category_title": "Electronics and Mobile",
		"status": true,
		"created": "2022-12-20T05:06:00.000Z",
		"modified": "2022-12-20T05:06:00.000Z",
		"product_name": "Sony Android LED TV ",
		"product_code": "MN88654",
		"meta_description": "Sony Bravia 80 cm (32 inches) HD Ready Smart LED Google TV KD-32W820K (Black) (2022 Model) | with Alexa Compatibility",

	},{
		"id": 18,
		"product_category_title": "Electronics and Mobile",
		"status": true,
		"created": "2022-12-20T05:06:00.000Z",
		"modified": "2022-12-20T05:06:00.000Z",
		"product_name": "LG Smart LED TV",
		"product_code": "MN88954",
		"meta_description": "Vinyl Black, 6GB RAM, 128 GB Storage | Slimmest(6.81mm) & Lightest(158g) 5G Smartphone | 10-bit AMOLED with Dolby Vision",

	},{
		"id": 17,
		"product_category_title": "Electronics and Mobile",
		"status": true,
		"created": "2022-12-20T05:06:00.000Z",
		"modified": "2022-12-20T05:06:00.000Z",
		"product_name": " Xiaomi 11 Lite NE 5G",
		"product_code": "MN88054",
		"meta_description": "Vinyl Black, 6GB RAM, 128 GB Storage | Slimmest(6.81mm) & Lightest(158g) 5G Smartphone | 10-bit AMOLED with Dolby Vision",

	},
	{
		"id": 16,
		"product_category_title": "Fitness",
		"status": true,
		"created": "2022-12-20T05:06:00.000Z",
		"modified": "2022-12-20T05:06:00.000Z",
		"product_name": "Lifelong PVC Hex Dumbbells Pack of 2",
		"product_code": "QR22454",
		"meta_description": "Dumbbells Weights for Men & Women (2kg-10kg)",

	},
	{
		"id": 15,
		"product_category_title": "Footwear and Shoes",
		"status": false,
		"created": "2022-12-20T05:06:00.000Z",
		"modified": "2022-12-20T05:06:00.000Z",
		"product_name": "Sport Shoes",
		"product_code": "WY22458",
		"meta_description": "Legend Breather Unisex Sport Shoes",

	},
	{
		"id": 14,
		"product_category_title": "Furniture",
		"status": true,
		"created": "2022-12-20T05:06:00.000Z",
		"modified": "2022-12-20T05:06:00.000Z",
		"product_name": "tester",
		"product_code": "WQ22454",
		"meta_description": "",

	},
	{
		"id": 13,
		"product_category_title": "Tupperware",
		"status": false,
		"created": "2022-12-20T05:06:00.000Z",
		"modified": "2022-12-20T05:06:00.000Z",
		"product_name": "SHAYONAM plastic Fridge Storage Boxes",
		"product_code": "MQ22654",
		"meta_description": "Fridge Organizer Case With Removable Drain Plate Stackable Fridge Storage Containers Keep Fresh For Storing Fish, Meat, Vegetables (1500ML) (Pack of 6)",

	},
	{
		"id": 12,
		"product_category_title": "Footwear & Shoes",
		"status": true,
		"created": "2022-12-20T05:06:00.000Z",
		"modified": "2022-12-20T05:06:00.000Z",
		"product_name": "Slippers",
		"product_code": "EQ22554",
		"meta_description": "Flite Flip Flops Thong Slippers",

	},
	{
		"id": 11,
		"product_category_title": "Stationery",
		"status": true,
		"created": "2022-12-06T04:38:00.000Z",
		"modified": "2022-12-06T04:38:00.000Z",
		"product_name": "without-image-product-category",
		"meta_description": "this is without image meta desc",

	}, {
		"id": 10,
		"product_category_title": "Veterinary & Pet Items",
		"status": true,
		"created": "2022-12-06T04:38:00.000Z",
		"modified": "2022-12-06T04:38:00.000Z",
		"product_name": "Pet Food",
		"meta_description": "Pedigree Dry Food for Puppy, Chicken & Milk Flavour, 3kg Pack",

	}, {
		"id": 9,
		"product_category_title": "Games & Toys",
		"status": false,
		"created": "2022-12-06T04:13:00.000Z",
		"modified": "2022-12-06T04:13:00.000Z",
		"product_name": "Building Blocks Puzzle Games",
		"meta_description": "FunBlast DIY Plastic Building Blocks for Kids Puzzle Games for Kids, Toys for Children Educational & Learning",

	}, {
		"id": 8,
		"product_category_title": "Watches",
		"status": true,
		"created": "2022-12-06T04:13:00.000Z",
		"modified": "2022-12-06T04:13:00.000Z",
		"product_name": "boAt Smart Watch",
		"product_code": "EU22004",
		"meta_description": "boAt Smart Talk with Advanced Dedicated Bluetooth Calling Chip, 1.69” HD Display with 550 NITS & 70% Color Gamut, 150+ Watch Faces, Multi-Sport Modes,HR,SpO2, IP68(Active Black)",

	}, {
		"id": 7,
		"product_category_title": "Footwear & Shoes",
		"status": true,
		"created": "2022-12-06T03:47:00.000Z",
		"modified": "2022-12-06T03:47:00.000Z",
		"product_name": "Walking Shoes",
		"product_code": "AI22004",
		"meta_description": "Campus Men's OXYFIT (N) Walking Shoes",

	}, {
		"id": 6,
		"product_category_title": "Clothing & Apparel",
		"status": true,
		"created": "2022-12-06T03:42:00.000Z",
		"modified": "2022-12-06T03:42:00.000Z",
		"product_name": "PORTBLAIR",
		"product_code": "XN22004",
		"meta_description": "Slim Fit High-Neck T-shirt",

	}, {
		"id": 5,
		"product_category_title": "Home and Kitchen",
		"status": true,
		"created": "2022-10-18T00:13:00.000Z",
		"modified": "2022-10-18T00:13:00.000Z",
		"product_name": "STELLAR HOME",
		"product_code": "PP12004",
		"meta_description": "STELLAR HOME 104 TC Printed Super King Size Bedsheet with 2 Pillow Covers",

	},{
		"id": 4,
		"product_category_title": "Orthopedic",
		"status": true,
		"created": "2022-10-18T00:13:00.000Z",
		"modified": "2022-10-18T00:13:00.000Z",
		"product_name": "Orthopedic Knee Caps",
		"product_code": "PO22114",
		"meta_description": "Boldfit Knee Caps For Women & Men Knee Support For Knee Pain Relief Products Knee Guard / Knee Belt / Knee Pads For Women",

	},{
		"id": 3,
		"product_category_title": "Clothing & Apparel",
		"status": false,
		"created": "2022-10-18T00:13:00.000Z",
		"modified": "2022-10-18T00:13:00.000Z",
		"product_name": "URBANO FASHION",
		"product_code": "PT22444",
		"meta_description": "Leaf Print Crew-Neck T-shirt",

	}]

	ngOnInit(): void {
		this.dtOptions = {
			pagingType: 'full_numbers'
		};
	}


}
