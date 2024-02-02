import Image from "next/image";
import LogoFooter from "../../../public/assets/footer_icon.svg";

export default function Footer() {
    return (
        <footer className="bg-black text-white px-6 py-4">
        <div className="container mx-auto">
             {/* Top Horizontal Bar */}
             <div className="border-t border-gray-600 w-full my-8"></div>

<div className="container mx-auto grid grid-cols-5 gap-4">
<div>
        <Image src={LogoFooter} alt="grove-icon" />
        
       
        <p className="mt-5 text-sm">Copyright © 202X The Grove PubliField</p>
        <p className="mt-5">7535 Frederick Street</p>
        <p>Dallas, TX 75208</p>
    </div>
    {/* <div>
        <Image src={LogoFooter} alt="grove-icon" />
        
       
        <p className="mt-5 text-sm">Copyright © 202X The Grove PubliField</p>
        <p className="mt-5">7535 Frederick Street</p>
        <p>Dallas, TX 75208</p>
    </div> */}

   
    
        <div>
            <h3 className="font-bold text-secondary">THE GROVE</h3>
            <ul>
                <li>Locations</li>
                <li>Shop The Grove (Coming soon)</li>
            </ul>
        </div>
        <div>
            <h3 className="font-bold text-secondary">OTHER</h3>
            <ul>
                <li>Sponsorship</li>
                <li>Corporate Events</li>
            </ul>
        </div>
        <div>
            <h3 className="font-bold text-secondary">FOLLOW US</h3>
            {/* Social Media Icons */}
        </div>
    

    {/* Newsletter Signup */}
    <div>
        <h3 className="font-bold">Be the first to know</h3>
        <form>
            <input type="email" placeholder="Your email" className="px-3 py-2 rounded" />
            <button type="submit" className="px-3 py-2 rounded bg-secondary text-white">Submit</button>
        </form>
    </div>
</div>
        </div>
           
        </footer>
    );
}
