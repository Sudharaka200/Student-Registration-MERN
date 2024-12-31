import Registration from "./Registration"
import Table from "./Table";

const users =[
    {
        id : 1,
        name : 'Prasad',
    },
    {
        id : 2,
        name : 'prasadi',
    }
];

function UserForm() {
  return (
    <div>
      <Registration />
      <Table rows={users}/>
    </div>
  )
}

export default UserForm
