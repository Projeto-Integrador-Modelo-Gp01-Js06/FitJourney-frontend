import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
    const data = new Date().getFullYear();

    return (
        <>
            <div className="flex justify-center text-black bg-lime-400">
                <div className="container flex flex-col items-center py-0">
                    <p className="text-xl font-bold">Fit Journey</p>
                    <div className="flex gap-2">
                        <a
                            href=""
                            target="_blank"
                            className="text-black hover:text-white transition duration-300"
                        >
                            <LinkedinLogo size={40} weight="light" />
                        </a>
                        <a
                            href=""
                            target="_blank"
                            className="text-black hover:text-white transition duration-300"
                        >
                            <InstagramLogo size={40} weight="light" />
                        </a>
                        <a
                            href=""
                            target="_blank"
                            className="text-black hover:text-white transition duration-300"
                        >
                            <FacebookLogo size={40} weight="light" />
                        </a>
                    </div>
                    <p className="text-xl font-light">Copyright: {data}</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
