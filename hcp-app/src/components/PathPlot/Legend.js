import React, { useEffect } from "react";
function Legend() {
    useEffect(() => {
        // Do whatever you want after first render
        // Put your code here
        dragElement(document.getElementById("legend"));

        function dragElement(elmnt) {
            console.log("element:", elmnt)

            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            if (document.getElementById(elmnt.id + "header")) {
                // if present, the header is where you move the DIV from:
                document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
            } else {
                // otherwise, move the DIV from anywhere inside the DIV:
                elmnt.onmousedown = dragMouseDown;
            }

            //when legend is clicked (initially)
            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
                
            }

            //when legend is being dragged (moving)
            function elementDrag(e) {
                
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // set the element's new position:
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                
            }
            
            function closeDragElement() {
                console.log("Legend is dropped, pos1:", pos1, "pos2", pos2, " pos3:",pos3," pos4:", pos4)
                
                //can't get mouse location.. :( )
                // let legend = document.getElementById('legend')
                // legend.style.zIndex = -5
                
                // setTimeout(
                //     function() {
                //         legend.style.zIndex = 1

                //         console.log("zindex2", legend.style.zIndex,Date())
                //     }
                //     .bind(this),
                //     3000
                // );
               
                // stop moving when mouse button is released:
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
    }, [])


    return (
        <div style={{

            height: '150px', width: '100px', border: '3px solid black',  position: 'relative', marginLeft: '80%'
        }}>
            <span>LEGEND</span>
            {/* <!-- Draggable DIV --> */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width:'inherit',
                height:'inherit'
            }}>
                <div id="legend">
                    <span id="legendheader" class="dot"></span>
                </div>
            </div>

        </div>
    );
}

export default Legend;