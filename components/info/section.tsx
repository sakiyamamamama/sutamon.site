import { DocContent } from "@/types/docContent";

const Section=({text,title}:DocContent)=>{
    return (
        <section className="mb-8">
            {title!==undefined && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
            <p className="text-slate-600">
                {text.trim()}
            </p>
        </section>
    )
}

export default Section;