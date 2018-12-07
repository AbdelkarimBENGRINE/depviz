package main

import (
	"encoding/json"
	"time"

	"github.com/lib/pq"
)

//
// Base
//

type Base struct {
	ID        string         `gorm:"primary_key" json:"id"`
	CreatedAt time.Time      `json:"created-at,omitempty"`
	UpdatedAt time.Time      `json:"updated-at,omitempty"`
	Errors    pq.StringArray `json:"errors,omitempty" gorm:"type:varchar[]"`
}

//
// Repository
//

type Repository struct {
	Base

	// base fields
	URL         string    `json:"url"`
	Title       string    `json:"name"`
	Description string    `json:"description"`
	Homepage    string    `json:"homepage"`
	PushedAt    time.Time `json:"pushed-at"`
	IsFork      bool      `json:"fork"`

	// relationships
	Provider   *Provider `json:"provider"`
	ProviderID string    `json:"provider-id"`
	Owner      *Account  `json:"owner"`
	OwnerID    string    `json:"owner-id"`
}

//
// Provider
//

type ProviderDriver string

const (
	UnknownProviderDriver ProviderDriver = "unknown"
	GithubDriver                         = "github"
	GitlabDriver                         = "gitlab"
)

type Provider struct {
	Base

	// base fields
	URL    string `json:"url"`
	Driver string `json:"driver"` // github, gitlab, unknown
}

//
// Milestone
//

type Milestone struct {
	Base

	// base fields
	URL         string    `json:"url"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	ClosedAt    time.Time `json:"closed-at"`
	DueOn       time.Time `json:"due-on"`
	// State string      // FIXME: todo
	// StartAt time.Time // FIXME: todo

	// relationships
	Creator      *Account    `json:"creator"`
	CreatorID    string      `json:"creator-id"`
	Repository   *Repository `json:"repository"`
	RepositoryID string      `json:"repository-id"`
}

//
// Issue
//

type Issue struct {
	Base

	// base fields
	URL         string    `json:"url"`
	CompletedAt time.Time `json:"completed-at"`
	Title       string    `json:"title"`
	State       string    `json:"state"`
	Body        string    `json:"body"`
	IsPR        bool      `json:"is-pr"`
	IsLocked    bool      `json:"is-locked"`
	Comments    int       `json:"comments"`
	Upvotes     int       `json:"upvotes"`
	Downvotes   int       `json:"downvotes"`
	IsOrphan    bool      `json:"is-orphan"`
	IsHidden    bool      `json:"is-hidden"`
	Weight      int       `json:"weight"`
	IsEpic      bool      `json:"is-epic"`
	HasEpic     bool      `json:"has-epic"`

	// relationships
	Repository   *Repository `json:"repository"`
	RepositoryID string      `json:"repository_id"`
	Milestone    *Milestone  `json:"milestone"`
	MilestoneID  string      `json:"milestone_id"`
	Author       *Account    `json:"author"`
	AuthorID     string      `json:"author_id"`
	Labels       []*Label    `gorm:"many2many:issue_labels" json:"labels"`
	Assignees    []*Account  `gorm:"many2many:issue_assignees" json:"assignees"`
	Parents      []*Issue    `json:"-" gorm:"many2many:issue_parents;association_jointable_foreignkey:parent_id"`
	Children     []*Issue    `json:"-" gorm:"many2many:issue_children;association_jointable_foreignkey:child_id"`
	Duplicates   []*Issue    `json:"-" gorm:"many2many:issue_duplicates;association_jointable_foreignkey:duplicate_id"`

	// internal
	ChildIDs     []string `json:"child_ids" gorm:"-"`
	ParentIDs    []string `json:"parent_ids" gorm:"-"`
	DuplicateIDs []string `json:"duplicate_ids" gorm:"-"`
}

func (i Issue) String() string {
	out, _ := json.Marshal(i)
	return string(out)
}

//
// Label
//

type Label struct {
	Base

	// base fields
	URL         string `json:"url"`
	Name        string `json:"name"`
	Color       string `json:"color"`
	Description string `json:"description"`
}

//
// Account
//

type Account struct {
	Base

	// base fields
	URL       string `json:"url"`
	Login     string `json:"login"`
	FullName  string `json:"fullname"`
	Type      string `json:"type"`
	Bio       string `json:"bio"`
	Location  string `json:"location"`
	Company   string `json:"company"`
	Blog      string `json:"blog"`
	Email     string `json:"email"`
	AvatarURL string `json:"avatar-url"`

	// relationships
	Provider   *Provider `json:"provider"`
	ProviderID string    `json:"provider-id"`
}

// FIXME: create a User struct to handle multiple accounts and aliases