import Image from "next/image";

export default function Logo(){
    return <Image loading="lazy" src='./favicon.svg' alt="logo" width={70} height={70}/>
}
//     return (