export const containerAnimation = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

export const powerUpAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export const powerUps = [
	{
		title: "Cliente", 
		options: [{
			icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjMuOTk1IDI0aC0xLjk5NWMwLTMuMTA0LjExOS0zLjU1LTEuNzYxLTMuOTg2LTIuODc3LS42NjQtNS41OTQtMS4yOTEtNi41ODQtMy40NTgtLjM2MS0uNzkxLS42MDEtMi4wOTUuMzEtMy44MTQgMi4wNDItMy44NTcgMi41NTQtNy4xNjUgMS40MDMtOS4wNzYtMS4zNDEtMi4yMjktNS40MTMtMi4yNDEtNi43NjYuMDM0LTEuMTU0IDEuOTM3LS42MzUgNS4yMjcgMS40MjQgOS4wMjUuOTMgMS43MTIuNjk3IDMuMDIuMzM4IDMuODE1LS45ODIgMi4xNzgtMy42NzUgMi43OTktNi41MjUgMy40NTYtMS45NjQuNDU0LTEuODM5Ljg3LTEuODM5IDQuMDA0aC0xLjk5NWwtLjAwNS0xLjI0MWMwLTIuNTIuMTk5LTMuOTc1IDMuMTc4LTQuNjYzIDMuMzY1LS43NzcgNi42ODgtMS40NzMgNS4wOS00LjQxOC00LjczMy04LjcyOS0xLjM1LTEzLjY3OCAzLjczMi0xMy42NzggNC45ODMgMCA4LjQ1MSA0Ljc2NiAzLjczMiAxMy42NzgtMS41NTEgMi45MjggMS42NSAzLjYyNCA1LjA5IDQuNDE4IDIuOTc5LjY4OCAzLjE3OCAyLjE0MyAzLjE3OCA0LjY2M2wtLjAwNSAxLjI0MXptLTEzLjQ3OC02bC45MSAyaDEuMTY0bC45Mi0yaC0yLjk5NHptMi45OTUgNmwtLjcwNC0zaC0xLjYxNWwtLjcwNCAzaDMuMDIzeiIvPjwvc3ZnPg==",
			name: 'PARTICULAR'
		}, {
			icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIuMjMgMTUuNWMtNi44MDEgMC0xMC4zNjctMS4yMjEtMTIuMjMtMi41OTd2OS4wOTdoMjR2LTguOTQ5Yy0zLjIxOCAyLjIyMS05LjQyMiAyLjQ0OS0xMS43NyAyLjQ0OXptMS43NyAyLjUzMmMwIDEuMDg3LS44OTYgMS45NjgtMiAxLjk2OHMtMi0uODgxLTItMS45Njh2LTEuMDMyaDR2MS4wMzJ6bS0xNC04LjU0MXYtMi40OTFoMjR2Mi42MDVjMCA1LjI4OS0yNCA1LjEzMy0yNC0uMTE0em05LTcuNDkxYy0xLjEwNCAwLTIgLjg5Ni0yIDJ2Mmgydi0xLjVjMC0uMjc2LjIyNC0uNS41LS41aDVjLjI3NiAwIC41LjIyNC41LjV2MS41aDJ2LTJjMC0xLjEwNC0uODk2LTItMi0yaC02eiIvPjwvc3ZnPg==",
			name: 'EMPRESA'
		}]
	},
	{
		title: "Tiempo",
		options: [{
			icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMmM1LjUxNCAwIDEwIDQuNDg2IDEwIDEwcy00LjQ4NiAxMC0xMCAxMC0xMC00LjQ4Ni0xMC0xMCA0LjQ4Ni0xMCAxMC0xMHptMC0yYy02LjYyNyAwLTEyIDUuMzczLTEyIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyem0xIDEydi02aC0ydjhoN3YtMmgtNXoiLz48L3N2Zz4=",
			name: 'JUSTO'
		}, {
			icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTguNTEzIDcuMTE5Yy45NTgtMS4xNDMgMS40ODctMi41NzcgMS40ODctNC4wMzZ2LTMuMDgzaC0xNnYzLjA4M2MwIDEuNDU5LjUyOCAyLjg5MiAxLjQ4NyA0LjAzNWwzLjA4NiAzLjY4Yy41NjcuNjc3LjU3MSAxLjYyNS4wMDkgMi4zMDZsLTMuMTMgMy43OTRjLS45MzYgMS4xMzYtMS40NTIgMi41NTUtMS40NTIgMy45OTV2My4xMDdoMTZ2LTMuMTA3YzAtMS40NC0uNTE3LTIuODU4LTEuNDUzLTMuOTk0bC0zLjEzLTMuNzk0Yy0uNTYyLS42ODEtLjU1OC0xLjYyOS4wMDktMi4zMDZsMy4wODctMy42OHptLTQuNjM5IDcuMjU3bDMuMTMgMy43OTRjLjY1Mi43OTIuOTk2IDEuNzI2Ljk5NiAyLjgzaC0xLjA2MWMtLjc5My0yLjAxNy00LjkzOS01LTQuOTM5LTVzLTQuMTQ3IDIuOTgzLTQuOTQgNWgtMS4wNmMwLTEuMTA0LjM0My0yLjAzOS45OTYtMi44MjlsMy4xMjktMy43OTNjMS4xNjctMS40MTQgMS4xNTktMy40NTktLjAxOS00Ljg2NGwtMy4wODYtMy42ODFjLS42Ni0uNzg1LTEuMDItMS43MzYtMS4wMi0yLjgzNGgxMmMwIDEuMTAxLS4zNjMgMi4wNS0xLjAyIDIuODM0bC0zLjA4NyAzLjY4Yy0xLjE3NyAxLjQwNS0xLjE4NSAzLjQ1MS0uMDE5IDQuODYzeiIvPjwvc3ZnPg==",
			name: 'PARA AYER'
		}]
	},
	{
		title: "Freelancer",
		options: [{
			icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjEuMTc0IDguMjA1Yy0uNDI3LTQuOTQzLTQuMDgyLTcuMjA1LTkuMTc0LTcuMjA1LTUuMTQzIDAtOC43NTEgMi4zMTEtOS4xNzQgNy4yMDUtMi4wMjYuMTQyLTIuODI2IDIuMDc5LTIuODI2IDQuMjIxIDAgMS44ODguODYxIDQuNjI3IDMuMTc2IDUuMTU5IDEuMTkzIDMuNTQ2IDQuMjI5IDUuNDE1IDguODI0IDUuNDE1czcuNjMxLTEuODY5IDguODI0LTUuNDE1YzIuMzE1LS41MzIgMy4xNzYtMy4yNzEgMy4xNzYtNS4xNTkgMC0yLjEyOC0uNzk0LTQuMDc5LTIuODI2LTQuMjIxem0tMS4xNDEgNy40NzFjLS40NDkuMDA5LS44MzYuMzE1LS45NDkuNzQ5LS43ODcgMy4wMzYtMy4xNyA0LjU3NS03LjA4NCA0LjU3NXMtNi4yOTctMS41MzktNy4wODMtNC41NzVjLS4xMTMtLjQzNC0uNS0uNzQtLjk0OS0uNzQ5LTIuMTM1LS4wNDEtMi40MzgtNC42NS0xLjMzNi01LjM2Ny4yNzItLjE3Ny42MTQtLjEwNC43NTYtLjA0MS42NzEuMyAxLjQyNy0uMjA3IDEuNDA2LS45NDEtLjA3MS0yLjUyNi45MzEtNC42NDcgMy4yMy01LjcwNi0uNjYzIDIuODIzIDIuMjA1IDUuNjM4IDYuNjcyIDQuNTk4LTQuMDEyLTEuMDk4LTEuMDU2LTYuMjIxIDIuMzUyLTMuOTU0IDEuNjA4IDEuMjE3IDIuMjE0IDMuMDcyIDIuMTYgNS4wNjMtLjAyMS43MzkuNzQzIDEuMjM5IDEuNDA2Ljk0MS4xNDItLjA2NC40ODMtLjEzNy43NTYuMDQxIDEuMTAxLjcxNi43OTggNS4zMjUtMS4zMzcgNS4zNjZ6bS0zLjUzMy00LjE3NmMwIC44MjgtLjU2IDEuNS0xLjI1IDEuNXMtMS4yNS0uNjcyLTEuMjUtMS41LjU2LTEuNSAxLjI1LTEuNSAxLjI1LjY3MiAxLjI1IDEuNXptLTcuNzUgMS41Yy0uNjkgMC0xLjI1LS42NzItMS4yNS0xLjVzLjU2LTEuNSAxLjI1LTEuNSAxLjI1LjY3MiAxLjI1IDEuNS0uNTYgMS41LTEuMjUgMS41em0tLjc1IDNoOHMtLjg0NCAyLjg3NS00IDIuODc1Yy0zLjI1IDAtNC0yLjg3NS00LTIuODc1eiIvPjwvc3ZnPg==",
			name: 'NOVATO'
		}, {
			icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNiIgdmlld0JveD0iMCAwIDI0IDI2Ij48cGF0aCBkPSJNMTYuNSAxNC41YzAgLjgyOC0uNTYgMS41LTEuMjUgMS41cy0xLjI1LS42NzItMS4yNS0xLjUuNTYtMS41IDEuMjUtMS41IDEuMjUuNjcyIDEuMjUgMS41em0tNy43NS0xLjVjLS42OSAwLTEuMjUuNjcyLTEuMjUgMS41cy41NiAxLjUgMS4yNSAxLjUgMS4yNS0uNjcyIDEuMjUtMS41LS41Ni0xLjUtMS4yNS0xLjV6bTMuMjUgOC4zNTRjMi4yMzUgMCAzLTIuMzU0IDMtMi4zNTRoLTZzLjg0NyAyLjM1NCAzIDIuMzU0em0xMi02LjA0MWMwIDEuNzY1LS45ODUgMy45OTEtMy4xMzggNC45MDYtMi4wMjUgMy4yMzMtNC44MjQgNS43ODEtOC44NjIgNS43ODEtMy44MjYgMC02LjgzNy0yLjU0OC04Ljg2Mi01Ljc4MS0yLjE1My0uOTE2LTMuMTM4LTMuMTQyLTMuMTM4LTQuOTA2IDAtMi4wNTMuODYyLTMuOCAyLjcxLTMuOTY0Ljg1Mi05LjA5OSA4LjU3LTguNDA4IDkuODM3LTEwLjg0OS4zMjMuNTU5LjQ3NyAxLjU3MS0uMDIgMi4yODYuODczLS4wNDUgMi4zNDQtMS4zMDQgMi43NTUtMi41NTIuNzU0LjM2NiAxLjAzMyAxLjU3Ny42NTYgMi4zNTQuNTQyLS4xMDMgMi4xODctMS4xNSAzLjA2Mi0yLjU4OC42ODggMS41NjMuMDI2IDMuNTYzLS43MDggNC43NzFsLS4wMTIuMDAxYzEuNzk2IDEuNzA3IDIuNzgxIDQuMTI5IDMuMDEgNi41NzYgMS44NTkuMTY1IDIuNzEgMS45MTcgMi43MSAzLjk2NXptLTIuNTgtMS44NjZjLS4yMzUtLjE1Mi0uNTMxLS4xMTUtLjY3Mi0uMDUzLS41Ni4yNS0xLjIxNC0uMDYyLTEuMzcyLS42NmwtLjAwMS4wMTZjLS4zMzMtMi42MDQtMS4xMjUtNC44NTQtMi42MTEtNS41NjUtNi40MjcgNy4wMDktMTAuODItLjkxNC0xMS45NCAzLjUyOS0uMTAxLjU4Mi0uMTY2IDEuMTcyLS4xNjYgMS43NjYgMCAuNzE5LS43NDMgMS4yMDktMS40MDYuOTE0LS4xNC0uMDYyLS40MzctLjEtLjY3Mi4wNTMtMSAuNjUxLS44OTQgNC4xODQgMS41NTQgNS4wMTIuMjI0LjA3Ni40MTMuMjI4LjUzNS40MyAyLjQ0NyA0LjA1MyA1LjIyNSA1LjExMSA3LjMzMSA1LjExMSAzLjI4OCAwIDUuNjE1LTIuMjY5IDcuMzMyLTUuMTExLjEyMi0uMjAyLjMxMi0uMzU0LjUzNS0uNDMgMi40NDctLjgyOCAyLjU1My00LjM2MSAxLjU1My01LjAxMnoiLz48L3N2Zz4=",
			name: 'EXPERIMENTADO'
		}]
	}
]