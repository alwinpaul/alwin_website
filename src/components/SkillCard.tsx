import Image from "next/image.js";

export default function SkillCard({ image, caption }: { image: string, caption: string }) {
    return (
        <div className="flex flex-col justify-center items-center text-sm gap-3 my-2">
            <Image
                src={image}
                alt={`${caption} icon`}
                height={64}
                width={64}
                priority
                objectFit="contain"
            />

            <p className="text-centre">{caption}</p>
        </div>
    );
}