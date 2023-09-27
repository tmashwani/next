import Link from "next/link";

export default function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href="/StudentList/Tufail">Tufail</Link>
        </li>
        <li>
          <Link href="/StudentList/Talha">Talha</Link>
        </li>
        <li>
          <Link href="/StudentList/Mobeen">Mobeen</Link>
        </li>
        <li>
          <Link href="/StudentList/Hammad">Hammad</Link>
        </li>
      </ul>
    </div>
  );
}
