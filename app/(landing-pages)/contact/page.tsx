import ContactUsComponent from "@/components/(landing-pages)/contact";
import Footer from "@/components/(landing-pages)/footer";
import Header from "@/components/(landing-pages)/headerx";
export const metadata = {
    title: "Contact Us",
    description: "Contact Us",
}   
export default function ContactPage() {
    return (
        <main >
        <Header />
        <div    className="p-10">
        <ContactUsComponent />
        </div>
        <Footer />  
        </main>         
    )
}       