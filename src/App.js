import React from "react"
import Sidebar from "./Sidebar"
import ScrollToTop from "./ScrollToTop"
import MarkdownPage from "./MarkdownPage"
import SubPage from "./SubPage"
import Home from "./Home"

import CreateALineChart from "./guides/CreateALineChart"
import CreateAnAreaChart from "./guides/CreateAnAreaChart"
import CreateAScatterplot from "./guides/CreateAScatterplot"
import CreateXYSummaries from "./guides/CreateXYSummaries"
import CreateXYBrushes from "./guides/CreateXYBrushes"
import CreateABarChart from "./guides/CreateABarChart"
import CreateAPieChart from "./guides/CreateAPieChart"
import CreateOrdinalSummaries from "./guides/CreateOrdinalSummaries"
import CreateOrdinalBrushes from "./guides/CreateOrdinalBrushes"
import CreateSparklines from "./guides/CreateSparklines"
import CreateAForceLayout from "./guides/CreateAForceLayout"
import CreateAPathDiagram from "./guides/CreateAPathDiagram"
import CreateAHierarchicalDiagram from "./guides/CreateAHierarchicalDiagram"
import CreateSmallMultiples from "./guides/CreateSmallMultiples"
import CreateCrossHighlighting from "./guides/CreateCrossHighlighting"
import Tooltips from "./guides/Tooltips"
import Annotations from "./guides/Annotations"
import UsingSketchyPaintyPatterns from "./guides/UsingSketchyPaintyPatterns"
import ForegroundBackgroundSVG from "./guides/ForegroundBackgroundSVG"
import CanvasRendering from "./guides/CanvasRendering"

import CandlestickChart from "./examples/CandlestickChart"
import WaterfallChart from "./examples/WaterfallChart"
import CanvasInteraction from "./examples/CanvasInteraction"

import HomerunMap from "./examples/HomerunMap"
import MarimekkoChart from "./examples/MarimekkoChart"
import BarLineChart from "./examples/BarLineChart"
import DotPlot from "./examples/DotPlot"
import SwarmPlot from "./examples/SwarmPlot"
import RidgelinePlot from "./examples/RidgelinePlot"
import Timeline from "./examples/Timeline"
import SlopeChart from "./examples/SlopeChart"
import RadarPlot from "./examples/RadarPlot"
import Matrix from "./examples/Matrix"
import CustomLayout from "./examples/CustomLayout"
import IsotypeChart from "./examples/IsotypeChart"

import Mark from "./sub-components/Mark"
import DividedLine from "./sub-components/DividedLine"

const ROOT = process.env.PUBLIC_URL

export const PAGES = [
  {
    url: "",
    name: "Home",
    className: "bold pointer black",
    component: Home
  },
  {
    url: "guides",
    name: "Guides",
    component: SubPage,
    className: "bold pointer black",
    children: [
      {
        name: "XYFrame",
        className: "sub-header"
      },
      {
        name: "Creating Line Charts",
        url: "line-chart",
        component: CreateALineChart,
        img: "line-chart"
      },
      // { name: "Creating Divided Line Charts" },
      {
        name: "Creating Area Charts",
        url: "area-chart",
        component: CreateAnAreaChart,
        img: "area-chart"
      },
      {
        name: "Creating Scatterplots",
        url: "scatterplot",
        component: CreateAScatterplot,
        img: "scatterplot"
      },
      {
        name: "Creating XY Summaries",
        url: "xy-summaries",
        component: CreateXYSummaries,
        img: "xy-summary"
      },

      {
        name: "Creating XY Brushes",
        url: "xy-brushes",
        component: CreateXYBrushes,
        img: "xy-brush"
      },
      {
        name: "OrdinalFrame",
        className: "sub-header"
      },
      {
        name: "Creating Bar Charts",
        url: "bar-chart",
        component: CreateABarChart,
        img: "bar-chart"
      },
      {
        name: "Creating Pie Charts",
        url: "pie-chart",
        component: CreateAPieChart,
        img: "pie-chart"
      },
      {
        name: "Creating Ordinal Summaries",
        url: "ordinal-summaries",
        component: CreateOrdinalSummaries,
        img: "or-summary"
      },
      {
        name: "Creating Ordinal Brushes",
        url: "ordinal-brushes",
        component: CreateOrdinalBrushes,
        img: "or-brush"
      },
      {
        name: "NetworkFrame",
        className: "sub-header"
      },
      {
        name: "Creating Force Layouts",
        url: "force-layouts",
        component: CreateAForceLayout,
        img: "force"
      },
      {
        name: "Creating Path Diagrams",
        url: "path-diagrams",
        component: CreateAPathDiagram,
        img: "path"
      },
      {
        name: "Creating Hierarchical Diagrams",
        url: "hierarchical",
        component: CreateAHierarchicalDiagram,
        img: "hierarchy"
      },
      {
        name: "All Frames",
        className: "sub-header"
      },
      {
        name: "Annotations",
        url: "annotations",
        component: Annotations,
        img: "annotations"
      },
      {
        name: "Annotations - Tooltips",
        url: "tooltips",
        component: Tooltips,
        img: "tooltips"
      },

      {
        name: "Annotations - Highlighting",
        url: "highlighting",
        component: CreateCrossHighlighting,
        img: "highlight"
      },

      {
        name: "Creating Small Multiples",
        url: "small-multiples",
        component: CreateSmallMultiples,
        img: "facet"
      },
      {
        name: "Canvas Rendering",
        url: "canvas-rendering",
        component: CanvasRendering,
        img: "canvas-interaction"
      },
      {
        name: "Creating Sparklines",
        url: "sparklines",
        component: CreateSparklines,
        img: "sparkline"
      },
      {
        name: "Using Sketchy / Painty / Patterns",
        url: "sketchy-painty-patterns",
        component: UsingSketchyPaintyPatterns,
        img: "pattern"
      },
      {
        name: "Using Foreground / Background SVG",
        url: "foreground-background-svg",
        component: ForegroundBackgroundSVG,
        img: "layers"
      },
      {
        name: "Accessibility",
        url: "accessibility",
        component: MarkdownPage,
        props: {
          filename: "accessibility"
        }
      }
    ]
  },
  {
    url: "examples",
    name: "Examples",
    component: SubPage,
    className: "bold pointer black",
    children: [
      {
        name: "XYFrame",
        className: "sub-header"
      },
      {
        name: "Candlestick Chart",
        url: "candlestick-chart",
        component: CandlestickChart,
        img: "candlestick"
      },

      {
        name: "Homerun Map",
        url: "homerun-map",
        component: HomerunMap,
        img: "baseball"
      },
      {
        name: "Canvas Interaction",
        url: "canvas-interaction",
        component: CanvasInteraction,
        img: "canvas-interaction"
      },
      {
        name: "OrdinalFrame",
        className: "sub-header"
      },
      {
        name: "Bar & Line Chart",
        url: "bar-line-chart",
        component: BarLineChart,
        img: "bar-line"
      },
      {
        name: "Waterfall Chart",
        url: "waterfall-chart",
        component: WaterfallChart,
        img: "waterfall"
      },
      {
        name: "Slope Chart",
        url: "slope-chart",
        component: SlopeChart,
        img: "slope"
      },
      {
        name: "Marimekko Chart",
        url: "marimekko-chart",
        component: MarimekkoChart,
        img: "marimekko"
      },
      {
        name: "Swarm Plot",
        url: "swarm-plot",
        component: SwarmPlot,
        img: "swarm"
      },
      {
        name: "Ridgeline Plot",
        url: "ridgeline-plot",
        component: RidgelinePlot,
        img: "ridgeline"
      },
      {
        name: "Dot Plot",
        url: "dot-plot",
        component: DotPlot,
        img: "dot"
      },
      {
        name: "Timeline",
        url: "timeline",
        component: Timeline,
        img: "timeline"
      },
      {
        name: "Radar Plot",
        url: "radar-plot",
        component: RadarPlot,
        img: "radar"
      },
      {
        name: "Isotype Chart",
        url: "isotype-chart",
        component: IsotypeChart,
        img: "isotype"
      },
      {
        name: "NetworkFrame",
        className: "sub-header"
      },
      {
        name: "Adjacency Matrix",
        url: "matrix",
        component: Matrix,
        img: "matrix"
      },
      {
        name: "Custom Layout",
        url: "custom-layout",
        component: CustomLayout,
        img: "custom-layout"
      }
    ]
  },
  {
    url: "api",
    name: "API",
    component: SubPage,
    className: "bold pointer black",
    children: [
      {
        name: "Main Components",
        className: "sub-header"
      },
      {
        name: "XYFrame",
        url: "xyframe",
        component: MarkdownPage,
        img: "scatterplot",
        props: {
          filename: "xyframe"
        }
      },
      {
        name: "OrdinalFrame",
        url: "ordinalframe",
        component: MarkdownPage,
        img: "bar-chart",
        props: {
          filename: "ordinalframe"
        }
      },

      {
        name: "NetworkFrame",
        url: "networkframe",
        img: "force",
        component: MarkdownPage,
        props: {
          filename: "networkframe"
        }
      },
      {
        name: "ResponsiveFrame",
        url: "responsiveframe",
        component: MarkdownPage,
        props: {
          filename: "responsiveframes"
        }
      },
      {
        name: "SparkFrame",
        url: "sparkFrame",
        img: "sparkline",
        component: MarkdownPage,
        props: {
          filename: "sparkframes"
        }
      },

      {
        name: "FacetController",
        url: "facetcontroller",
        img: "facet"
      },
      {
        name: "Sub-Components",
        className: "sub-header"
      },
      {
        name: "Mark",
        url: "mark",
        component: Mark
      },
      {
        name: "DividedLine",
        url: "dividedline",
        component: DividedLine,
        img: "divided-line"
      }
    ]
  }
]

const FallbackPage = props => {
  window.history.replaceState(null, null, "/")
  return <Home {...props} />
}

export default function() {
  const view = window.location.pathname.split(/#|\//g).filter(d => d)

  let View,
    viewProps = {},
    page,
    subpage

  //router logic
  if (view[0]) {
    page = PAGES.find(d => d.url === view[0])
    if (page && view[1]) {
      subpage = page.children.find(d => d.url === view[1])
      if (subpage) {
        View = subpage.component
        if (subpage.props) viewProps = subpage.props
      } else {
        View = page.component
        if (page.props) viewProps = page.props
      }
    } else if (page) {
      View = page.component
      if (page.props) viewProps = page.props
    }
  } else {
    page = PAGES[0]

    View = page.component
    viewProps = page.props
  }

  return (
    <div className="App">
      <ScrollToTop location={window.location} />
      <header className="flex">
        <div className="logo">
          <img src={ROOT + "/assets/img/semiotic.png"} alt="Semiotic" />
        </div>
        <div className="flex space-between">
          <h1>
            {page && page.name}
            {subpage && ` > ${subpage.name}`}
          </h1>

          <div className="flex github-links">
            <p className="no-margin">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/nteract/semiotic"
              >
                Semiotic Github
              </a>
            </p>
            <p className="no-margin">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/nteract/semiotic-docs"
              >
                Docs Github
              </a>
            </p>
          </div>
        </div>
      </header>
      <div className="flex body">
        <div className="sidebar">
          <div>
            <Sidebar pages={PAGES} selected={view[view.length - 1]} />
          </div>
        </div>
        <div className="container">
          <h1>
            {(subpage && subpage.name) ||
              (page && page.name && page.name !== "Home" && page.name)}
          </h1>
          <div className="margin-bottom">
            {(View && <View {...viewProps} page={page && page.name} />) || (
              <FallbackPage {...viewProps} page="Home" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
