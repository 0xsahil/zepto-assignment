import { useState , MouseEvent } from "react";
import { UserTypes, usersData } from "../utils/Users";

const Dashboard = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [filterValue, setFilterValue] = useState<string>('');
    const [selectedChips, setSelectedChips] = useState<string[]>([]);

    const filteredUsers = usersData.filter(
        user => user.name.toLowerCase().includes(filterValue.toLowerCase())
            && !selectedChips.includes(user.name)
    );

    const handleChipClick = (value: string) => {
        setSelectedChips([...selectedChips, value]);
        setFilterValue('');
    };

    const handleChipDelete = (e: MouseEvent, value: string) => {
        e.preventDefault()
        setSelectedChips(selectedChips.filter(chip => chip !== value));
    };

    const handleSuggestionClick = (e: MouseEvent, value: string) => {
        e.preventDefault();
        handleChipClick(value);
    };


    return (
        <div className="relative mx-auto mt-10 w-4/5 md:max-w-lg lg:max-w-2xl">
            <div className="flex flex-col items-center">
                <div className={"flex flex-wrap " + isFocused ? "border-b border-blue-500" : "border-b border-gray-500"}>

                    {selectedChips.length > 0 && <SelectedUsers selectedChips={selectedChips} handleChipDelete={handleChipDelete} />}
                    <input
                        placeholder="Invite collaborators..."
                        type="text"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        value={filterValue}
                        onChange={(e) => setFilterValue(e.target.value)}
                        className="p-2 rounded outline-none"
                    />
                </div>
                {isFocused && <FilteredUsersList filteredUsers={filteredUsers} handleSuggestionClick={handleSuggestionClick} />}
            </div>
        </div>
    );
};

export default Dashboard;





// Selected users component
const SelectedUsers = ({ selectedChips, handleChipDelete }: { selectedChips: string[], handleChipDelete: Function }) => {
    return <div className="flex flex-wrap mt-2">
        {selectedChips.map((chip, index) => (
            <p key={index} className="bg-gray-200 p-2 m-1 rounded hover:bg-gray-400/70">
                {chip} <button className="text-red-600 font-bold" onMouseDown={(e) => handleChipDelete(e, chip)}>&#10005;</button>
            </p>
        ))}
    </div>
}



// Filtered users component
const FilteredUsersList = ({ filteredUsers, handleSuggestionClick }: { filteredUsers: UserTypes[], handleSuggestionClick: Function }) => {

    return <ul className="mt-2 absolute top-full left-0 bg-gray-600 p-2 rounded-lg">
        {filteredUsers.length > 0 && filteredUsers.map((user, index) => (
            <li key={index} onMouseDown={(e) => handleSuggestionClick(e, user.name)} className="text-sm cursor-pointer p-2 rounded-lg my-2 bg-gray-300 hover:bg-gray-200">
                {user.name} <span className="text-xs opacity-80">{user.email}</span>
            </li>
        ))}
        {
            !filteredUsers.length && <p className="text-red-400 font-semibold">No one to invite</p>
        }
    </ul>
}

