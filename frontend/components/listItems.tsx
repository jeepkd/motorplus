import Link from "next/link"
import * as React from "react"

import AssignmentIcon from "@mui/icons-material/Assignment"
import BarChartIcon from "@mui/icons-material/BarChart"
import DashboardIcon from "@mui/icons-material/Dashboard"
import LayersIcon from "@mui/icons-material/Layers"
import PeopleIcon from "@mui/icons-material/People"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { Box } from "@mui/material"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import ListSubheader from "@mui/material/ListSubheader"

export const mainListItems = (
  <Box>
    <Link href="/bikes" passHref>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="รถจักรยานยนต์" />
      </ListItem>
    </Link>
    <Link href="/customers" passHref>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="ลูกค้า" />
      </ListItem>
    </Link>
    <Link href="/users" passHref>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="ผู้ใช้งาน" />
      </ListItem>
    </Link>
    {/* <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem> */}
  </Box>
)

export const secondaryListItems = (
  <Box>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </Box>
)
