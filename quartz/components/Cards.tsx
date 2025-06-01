import { QuartzComponentConstructor } from "./types"
import cardStyle from "./styles/card.scss"

export const TOTAL_CARDS = 3
export const CARDS = {
    test: (
        <a href={"/test"}>
      <div class="card card-1">
        <p class="card-title">Test</p>
        <p class="card-subhead">test</p>
        <img src="jardin/static/apis.png" class="card-illustration-1" />
      </div>
    </a>
    ),
    test1: (
        <a href={"/test"}>
      <div class="card card-2">
        <p class="card-title">Test1</p>
        <p class="card-subhead">test1</p>
        <img src="jardin/static/butterfly.png" class="card-illustration-2" />
      </div>
    </a>
    ),
    test2: (
        <a href={"/test"}>
      <div class="card card-3">
        <p class="card-title">Hello3</p>
        <p class="card-subhead">Hello3</p>
        <img src="jardin/static/hummingbird.png" class="card-illustration-3" />
      </div>
    </a>
    ),
}

export default (() => {
    function CardComponent() {
        return (
            <div>
        <div class="content-container">

        <div class="issue-container">
            {Object.values(CARDS)}
            {Array(TOTAL_CARDS - Object.keys(CARDS).length)
              .fill(0)
              .map(() => (
                <div class="card card-coming">
                  <p class="card-title">Coming Soon</p>
                  <p class="card-subhead">Issue XXX</p>
                </div>
              ))}
        </div>
        </div>
        </div>
    )
}
CardComponent.css = cardStyle
return CardComponent
}) satisfies QuartzComponentConstructor