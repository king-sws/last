import PropTypes from "prop-types"


const SkillsCard = ({img, label , desc , classes}) => {
  return (
    <div className={"flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group " + classes} >
        <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors " >
            <img src={img} alt={label} width={32} height={32} />
        </figure>
        <div className="">
            <h3 className="">{label}</h3>
            <p className="text-sm text-zinc-400">{desc}</p>
        </div>
    </div>
  )
}
SkillsCard.prototype ={
    img:PropTypes.object.isRequired,
    label:PropTypes.string.isRequired,
    desc:PropTypes.string.isRequired,
    classes:PropTypes.string
}
export default SkillsCard