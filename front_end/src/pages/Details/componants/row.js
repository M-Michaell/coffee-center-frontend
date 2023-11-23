export default function Row({ x, y }) {
  return (
   <tbody>

      <tr key="">
        <td className="w-25 text-secondary me-3">{x}</td>
        <td className="w-75">{y}</td>
      </tr>
   </tbody>

  );
}
