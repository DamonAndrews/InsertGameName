import { useState, useEffect, useRef } from 'react';

class Boundary {
  static width = 40
  static height = 40
  constructor({ position }, c) {
    this.c = c
    this.position = position
    this.width = 40
    this.height = 40
  }

  draw() {
    this.c.fillStyle = 'white'
    this.c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}

class Player {
  constructor({ position, velocity }, c) {
    this.c = c
    this.position = position
    this.velocity = velocity
    this.radius = 12
  }

  draw({ x, y }) {
    new Promise(res => {
      this.c.beginPath();
      this.c.clearRect(
        x - this.radius - 3,
        y - this.radius - 3,
        this.radius * 2 + 6,
        this.radius * 2 + 6
      );
      this.c.closePath();

      res("Erased")
    }).then(() => {
      this.c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
      this.c.fillStyle = 'yellow'
      this.c.fill()
      this.c.closePath()
    })
  }

  update(prevPos) {
    this.draw({ x: this.position.x, y: this.position.y })
    this.position.x = prevPos.x + this.velocity.x
    this.position.y = prevPos.y + this.velocity.y

    console.log(prevPos, this.position)
  }
}

const map = [
  ['-', '-', '-', '-', '-', '-', '-'],
  ['-', ' ', ' ', ' ', ' ', ' ', '-'],
  ['-', ' ', '-', ' ', '-', ' ', '-'],
  ['-', ' ', ' ', ' ', ' ', ' ', '-'],
  ['-', ' ', '-', ' ', '-', ' ', '-'],
  ['-', ' ', ' ', ' ', ' ', ' ', '-'],
  ['-', '-', '-', '-', '-', '-', '-']
]

export default function Maze({ parentRef, ...props }) {
  const [c, setC] = useState({
    value: null
  });
  const [player, setPlayer] = useState(null);
  const [boundaries, setBoundaries] = useState([]);
  const [prevPos, setPrevPos] = useState({
    x: Boundary.width + Boundary.width / 2,
    y: Boundary.height + Boundary.height / 2
  })
  const [keys, setKeys] = useState({
    w: {
      pressed: false
    },
    s: {
      pressed: false
    },
    a: {
      pressed: false
    },
    d: {
      pressed: false
    }
  });
  const [lastKey, setLastKey] = useState('');
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    determineBoundaries()

    setC({ value: context });

    const playerInit = new Player({
      position: {
        x: Boundary.width + Boundary.width / 2,
        y: Boundary.height + Boundary.height / 2
      },
      velocity: {
        x: 0,
        y: 0
      }
    }, context)
    setPlayer(playerInit)
    playerInit.draw({
      x: Boundary.width + Boundary.width / 2,
      y: Boundary.height + Boundary.height / 2
    })

    function determineBoundaries() {

      const boundariesTemp = [];
      map.forEach((row, i) => {
        row.forEach((symbol, j) => {
          switch (symbol) {
            case '-':
              const boundary = new Boundary({
                position: {
                  x: Boundary.width * j,
                  y: Boundary.height * i
                }
              }, context)
              boundariesTemp.push(
                boundary
              )
              boundary.draw()
              break
            default: break;
          }
        })
      })
      setBoundaries(boundariesTemp)
    }

    document.addEventListener("keyup", () => {
      setLastKey(null)
      setKeys({
        w: {
          pressed: false
        },
        s: {
          pressed: false
        },
        a: {
          pressed: false
        },
        d: {
          pressed: false
        }
      })
    });

    document.addEventListener("keydown", handleKeyPressOrRelease);
  }, [])

  function circleCollidesWithRectangle({ circle, rectangle }) {
    return (
      circle.position.y - circle.radius + circle.velocity.y <= rectangle.position.y + rectangle.height && circle.position.x + circle.radius + circle.velocity.x >= rectangle.position.x && circle.position.y + circle.radius + circle.velocity.y >= rectangle.position.y && circle.position.x - circle.radius + circle.velocity.x <= rectangle.position.x + rectangle.width
    )
  }

  function goX(x, key) {
    setPrevPos({
      ...prevPos,
      x: player.position.x
    })

    if (keys[key]?.pressed && lastKey === key) {
      for (let i = 0; i < boundaries.length; i++) {
        const boundary = boundaries[i]
        if (circleCollidesWithRectangle({
          circle: {
            ...player, velocity: {
              x,
              y: 0
            }
          }, rectangle: boundary
        })) {
          setPlayer(
            new Player({
              ...player,
              velocity: {
                ...player.velocity,
                x: 0
              }
            }, c?.value))
          break
        } else {
          setPlayer(
            new Player({
              ...player,
              velocity: {
                ...player.velocity,
                x,
                y: 0
              }
            }, c?.value))
        }
      }
    }

  }

  function goY(y, key) {
    setPrevPos({
      ...prevPos,
      y: player.position.y
    })

    if (keys[key]?.pressed && lastKey === key) {
      for (let i = 0; i < boundaries.length; i++) {
        const boundary = boundaries[i]
        if (circleCollidesWithRectangle({
          circle: {
            ...player, velocity: {
              x: 0,
              y
            }
          }, rectangle: boundary
        })) {
          setPlayer(
            new Player({
              ...player,
              velocity: {
                ...player.velocity,
                y: 0
              }
            }, c?.value))
          break
        } else {
          setPlayer(
            new Player({
              ...player,
              velocity: {
                ...player.velocity,
                x: 0,
                y
              }
            }, c?.value))
        }
      }
    }
  }

  useEffect(() => {
   
  }, [player?.velocity.x, player?.velocity.y])

  const handleKeyPressOrRelease = ({ key }) => {
    setKeys({
      ...keys,
      [key]: {
        pressed: ![key].pressed
      }
    })
    setLastKey(key)
  }

  useEffect(() => {
    if (!lastKey) {
      return
    }

    if (lastKey === "w") {
      // goY(-5, "w")
      requestAnimationFrame(() => goY(-5, "w"));
    } else if (lastKey === "s") {
      // goY(5, "s");
      requestAnimationFrame(() => goY(5, "s"));
    } else if (lastKey === "a") {
      // goX(5, "a")
      requestAnimationFrame(() => goX(-5, "a"));
    } else if (lastKey === "d") {
      // goX(-5, "d")
      requestAnimationFrame(() => goX(5, "d"));
    }

    boundaries.forEach((boundary) => {
      boundary.draw()
    })
    player?.update(prevPos)
  }, [
    lastKey, 
    goX,
    goY,
    player?.position.x, 
    player?.position.y, 
    player?.velocity.x, 
    player?.velocity.y
  ])


  return (
    <div>
      <canvas height={Boundary.height * map.length} width={Boundary.width * map[0].length} ref={canvasRef} {...props} />
    </div >
  )
}



