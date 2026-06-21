import TaskItem from "./TaskItem";

export default function TaskList() {
    return (
        <>
            <div className="border border-gray-200 rounded-md overflow-hidden divide-y divide-gray-200">
                <TaskItem />
                <TaskItem />
                <TaskItem />
            </div>
        </>
    );
}
