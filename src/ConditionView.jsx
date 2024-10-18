import DateComponent from './DatePickerView';
import Select from './Select'
import People from './PeopleView';

export default function Condition() {
    return (
        <div className="container mx-auto flex gap-24 justify-between flex-wrap lg:flex-nowrap px-16 md:px-0 mt-40 lg:mt-80">
            <Select></Select>
            <DateComponent></DateComponent>
            <People></People>
        </div>
    )
}