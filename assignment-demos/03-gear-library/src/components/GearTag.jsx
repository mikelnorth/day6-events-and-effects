function GearTag({ item }) {
  return (
    <li className="gear-tag">
      <h3>{item.name}</h3>
      <p className="gear-meta">
        {item.category} <span className="gear-bin">Bin {item.bin}</span>
      </p>
      <p className={item.available ? "stamp in" : "stamp out"}>
        {item.available ? "Available" : "Checked out"}
      </p>
    </li>
  )
}

export default GearTag
