export default function People() {
    return (<div className="flex flex-wrap w-full">
        <p className="w-full mb-8">用餐人數</p>
        <select name="" id="" className="py-8 px-8 block w-full bg-neutral-50 hover:border-brand-400 rounded-8 border-1 h-56 focus:outline-none border border-1 border-neutral-200 focus:ring-brand-500 focus:ring-1">
            <option value="one">一人</option>
            <option value="two">二人</option>
            <option value="three">三人</option>
        </select>
    </div>)
}